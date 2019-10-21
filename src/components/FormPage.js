import React from 'react';
import {Link} from 'react-router-dom';

import '../form-page.css';

class FormPage extends React.Component{
	constructor(props){
		super(props);
		this.state={
			errors:{
				name:'',
				email:'',
				message:'',
				theme:''
			}
		}
	}
	validateField=({name,value})=>{
		var errors=this.state.errors;
		switch(name){
			case 'name':
				if(!value){
					errors.name='empty'
				}else{
					errors.name='';
				}
				break;
			case 'email':
				const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
				if(!validEmailRegex.test(value)){
					errors.email='invalid';
				}else{
					errors.email='';
				}
				break;
			case 'theme':
				errors.theme=value?'':'empty';
			case 'message':
				errors.message=value?'':'empty';
			default:
				break;
		}

		this.setState({
			errors
		});
	}
	submit=(e)=>{
		const {name,email,theme,message}=this.props;
		let {errors}=this.state;
		if(!name){
			errors.name='empty';
		}
		if(!email){
			errors.email='empty';
		}
		if(!theme){
			errors.theme='empty';
		}
		if(!message){
			errors.message='empty';
		}
		if(errors.name || errors.email || errors.theme || errors.message){
			e.preventDefault();
		}else{
			this.props.submitForm();
		}

		this.setState({errors})
	}
	render(){
		const {themes,themesMenuOpened,theme,name,email,message,toggleThemesMenu,selectTheme,inputName,inputMail,inputMessage,resetForm}=this.props
		const {errors}=this.state;
		console.log('form page props',this.props);
		console.log('form page state',this.state);
		return(
			<div className='form-page'>
				<div className='form-card'>
					<div className='form-card-body'>
						<form>
							<h2 className='form-title'>Форма для тебя</h2>
							<InputBox changeHandler={inputName} value={name} placeholder='Представьтесь пожалуйста' name='name' validator={this.validateField} error={errors.name} />
							<InputBox changeHandler={inputMail} value={email} placeholder='Введите ваш e-mail' name='email' cl='mt-2' validator={this.validateField} error={errors.email}/>
							<ThemeSelectMenu themes={themes} opened={themesMenuOpened} toggle={toggleThemesMenu} select={selectTheme} theme={theme} error={errors.theme} validator={this.validateField} />
							<Textarea changeHandler={inputMessage} value={message} validator={this.validateField} error={errors.message} />
							<div className='form-footer mt-2'>
								<div className='button reset-button' onClick={resetForm}>Сбросить</div>
								<Link onClick={this.submit} to={'/'} className='button ml-auto'>Отправить</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

function InputBox({changeHandler,value,placeholder,name,cl,validator,error}){
	const blurHandler=(e)=>{
		e.target.placeholder=placeholder;
		changeHandler(e.target.value);
		validator(e.target);
	}

	if(value){
		var label=(
			<span className='placeholder'>{placeholder}</span>
		)
	}

	return(
		<div className={cl+' input-box '+(value?'filled ':'')+(error?'with-error ':'')}>
			{label}			
			<input name={name} type="text" placeholder={placeholder} onFocus={(e)=>{e.target.placeholder=''; console.log(e.target)}} onBlur={blurHandler} defaultValue={value}/>
		</div>
	);
}

function ThemeSelectMenu({themes,opened,toggle,select,theme,validator,error}){
	const changeHandler=(arg1,arg2)=>{
		select(arg1);
		validator(arg2);
	}
	if(opened){
		const options=themes.map((theme,index)=>{
			return <ThemeOption key={index} theme={theme} select={changeHandler}/>
		});

		var dropdown=(
			<div className='custom-select-dropdown'>
				{options}
			</div>
		);
	}else{
		dropdown='';
	}
	
	return(
		<div className='select-box mt-2'>
			<div className={'input-box '+(error?'with-error ':'')+(theme?'filled ':'')}>
				<SelectArea opened={opened} toggle={toggle} theme={theme}/>
				{dropdown}
			</div>
		</div>
	);
}

function SelectArea({opened,toggle,theme}){
	if(theme && theme.value){
		var content=(
			<div className='selected-item'>
				<span className='placeholder'>Тема сообщения</span>
				{theme.name}
			</div>
		)
	}else{
		content='Тема сообщения';
	}

	return(
		<div className={'custom-select-area ' + (opened?'open':'') } onClick={toggle}>
			{content}
		</div>
	)
}

function ThemeOption({theme,select}){
	const validatorData={
		name:'theme',
		value:theme.value
	}
	return(
		<div className='custom-select-option' value={theme.value} onClick={(e)=>select(theme.value,validatorData)}>{theme.name}</div>
	);
}

function Textarea({changeHandler,value,validator,error}){
	const blurHandler=(e)=>{
		e.target.placeholder='Введите сообщение';
		changeHandler(e.target.value);
		validator(e.target);
	}
	return(
		<div className={'input-box mt-2 '+(error?'with-error ':'')+(value?'filled ':'')}>
			<textarea placeholder='Введите сообщение' rows='4' onFocus={(e)=>{e.target.placeholder=''}} onBlur={blurHandler} name='message' defaultValue={value}></textarea>
		</div>
	)
}

export default FormPage;