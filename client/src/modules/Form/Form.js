import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Route, Link, Redirect} from 'react-router-dom';
import {Button, CardTitle} from 'reactstrap';

import {INPUT_NAME, SELECT_THEME, INPUT_EMAIL, INPUT_MESSAGE, RESET_FORM, SUBMIT_FORM_REQ, SUBMIT_FORM_RES, TOGGLE_THEMES_MENU} from './index';

import './styles/form-page.css';

class Form extends React.Component{
	constructor(props){
		super(props);
		this.state={
			errors:{
				name:'',
				email:'',
				message:'',
				theme:''
			},
			formIsReady:false,
			redirect:'',
		}

		this.setInputNameRef=(element)=>{
			this.inputName=element;
		}
		this.setInputEmailRef=(element)=>{
			this.inputEmail=element;
		}
		this.setInputMessageRef=(element)=>{
			this.inputMessage=element;
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
		const {name,email,theme,message,submitForm,requestId}=this.props;
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
			submitForm({name, email, theme:theme.name, message, id:requestId}).then((r)=>{
				if(r.result==='success'){
					this.setState({redirect:'/'});
				}
			});
		}

		this.setState({errors})
	}
	resetForm=()=>{
		this.props.resetForm();
		console.log('resetting');
		this.inputName.value='';
		this.inputEmail.value='';
		this.inputMessage.value='';
	}
	render(){
		const {themes,themesMenuOpened,theme,name,email,message,toggleThemesMenu,selectTheme,inputName,inputMail,inputMessage,submitting,submitted,requestId}=this.props;
		const {errors, redirect}=this.state;

		if(redirect){
			return(
				<Redirect to={redirect} />
			);
		}

		return(
			<div className='form-page'>
				<div className='form-card'>
					<CardTitle>
						<Link to='/'>
							<Button close />
						</Link>
					</CardTitle>
					<div className='form-card-body'>
						<form>
							<h2 className='form-title'>Форма для тебя</h2>
							<InputBox changeHandler={inputName} value={name} placeholder='Представьтесь пожалуйста' name='name' validator={this.validateField} error={errors.name} setRef={this.setInputNameRef}/>
							<InputBox changeHandler={inputMail} value={email} placeholder='Введите ваш e-mail' name='email' cl='mt-2' validator={this.validateField} error={errors.email} setRef={this.setInputEmailRef} />
							<ThemeSelectMenu themes={themes} opened={themesMenuOpened} toggle={toggleThemesMenu} select={selectTheme} theme={theme} error={errors.theme} validator={this.validateField} />
							<Textarea changeHandler={inputMessage} value={message} validator={this.validateField} error={errors.message} setRef={this.setInputMessageRef}/>
							<div className='form-footer mt-2'>
								<Button className='button reset-button' onClick={this.resetForm}>Сбросить</Button>
								<Button className='button ml-auto' onClick={this.submit}>Отправить</Button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

function InputBox({changeHandler,value,placeholder,name,cl,validator,error,setRef}){
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
			<input ref={setRef} name={name} type="text" placeholder={placeholder} onFocus={(e)=>{e.target.placeholder=''; console.log(e.target)}} onBlur={blurHandler} defaultValue={value}/>
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

function Textarea({changeHandler,value,validator,error,setRef}){
	const blurHandler=(e)=>{
		e.target.placeholder='Введите сообщение';
		changeHandler(e.target.value);
		validator(e.target);
	}
	return(
		<div className={'input-box mt-2 '+(error?'with-error ':'')+(value?'filled ':'')}>
			<textarea ref={setRef} placeholder='Введите сообщение' rows='4' onFocus={(e)=>{e.target.placeholder=''}} onBlur={blurHandler} name='message' defaultValue={value}></textarea>
		</div>
	)
}

const mapStateToProps=state=>{
	return state.Form;
}

const mapDispatchToProps=dispatch=>{
	return {
		toggleThemesMenu:()=>{
			dispatch({
				type:TOGGLE_THEMES_MENU
			});
		},
		selectTheme:(index)=>{
			dispatch({
				type:SELECT_THEME,
				value:index
			});
		},
		inputName:(name)=>{
			dispatch({
				type:INPUT_NAME,
				name
			});
		},
		inputMail:(email)=>{
			dispatch({
				type:INPUT_EMAIL,
				email
			});
		},
		inputMessage:(message)=>{
			dispatch({
				type:INPUT_MESSAGE,
				message
			});
		},
		resetForm:()=>{
			dispatch({
				type:RESET_FORM
			});
		},
		submitForm:(data)=>{
			dispatch({
				type:SUBMIT_FORM_REQ
			});
			console.log('submitting',data);
			return fetch('/api/request/store',{
				method:"POST",
				body:JSON.stringify(data),
				headers: {
			        'Accept': 'application/json',
			        'Content-Type': 'application/json'
			    }
			}).then((res)=>res.ok?res.json():{}).then((json)=>{
				dispatch({
					type:SUBMIT_FORM_RES,
					payload:json?json:{result:'error',data:{}}
				});
				return json;
			});
		}
	}
}

const FormContainer=connect(mapStateToProps, mapDispatchToProps)(Form);

export default FormContainer;