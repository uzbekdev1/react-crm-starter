import {connect} from 'react-redux';

import FormPage from '../components/FormPage';

const mapStateToProps=state=>{
	return state.form;
}

const mapDispatchToProps=dispatch=>{
	return {
		toggleThemesMenu:()=>{
			dispatch({
				type:'TOGGLE_THEMES_MENU'
			});
		},
		selectTheme:(index)=>{
			dispatch({
				type:'SELECT_THEME',
				value:index
			});
		},
		inputName:(name)=>{
			dispatch({
				type:'INPUT_NAME',
				name
			});
		},
		inputMail:(email)=>{
			dispatch({
				type:'INPUT_EMAIL',
				email
			});
		},
		inputMessage:(message)=>{
			dispatch({
				type:'INPUT_MESSAGE',
				message
			});
		},
		resetForm:()=>{
			dispatch({
				type:'RESET_FORM'
			});
		},
		submitForm:()=>{
			dispatch({
				type:'SUBMIT_FORM'
			});
		}
	}
}

const Form=connect(
	mapStateToProps,
	mapDispatchToProps
)(FormPage);

export default Form;