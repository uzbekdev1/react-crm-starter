import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class MainPage extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		console.log('main page props',this.props);
		const {submitted,name,theme,email,message}=this.props;

		if(submitted){
			var link=<Link to={'/form/edit'} className={'button'}>Изменить форму</Link>
			var formData=<FormData name={name} email={email} theme={theme} message={message} />
		}else{
			link=<Link to={'/form'} className={'button'}>Заполнить форму</Link>
			formData=<p>Форма пока не заполнена.</p>
		}
		return(
			<div class='main-page'>
				<p>Form data:</p>
				{formData}
				{link}
			</div>
		)
	}
}

function FormData({name,email,theme,message}){
	return(
		<div className='form-data'>
			<p>Имя: <span className='form-value'>{name}</span></p>
			<p>e-mail: <span className='form-value'>{email}</span></p>
			<p>Тема сообщения: <span className='form-value'>{theme.name}</span></p>
			<p>Сообщения: <span className='form-value'>{message}</span></p>
		</div>
	);
}

const mapStateToProps=(state)=>{
	return {
		submitted:state.Form.submitted,
		name:state.Form.name,
		email:state.Form.email,
		theme:state.Form.theme,
		message:state.Form.message
	}
}

const Home = connect(mapStateToProps)(MainPage);

export default Home;