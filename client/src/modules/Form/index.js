import Router from './Router';
import {defineModule} from '../functions';

const defaultState={
	themes:[{
		name:'Тема 1',
		value:1
	},{
		name:'Тема 2',
		value:2
	},{
		name:'Тема 3',
		value:3
	},{
		name:'Тема 4',
		value:4
	}],
	theme:'',
	message:'',
	name:'',
	email:'',
	themesMenuOpened:false,
	submitted:false
}

export const reducer=(state=defaultState,action)=>{
	switch(action.type){
		case 'SELECT_THEME':
			var selectedTheme={};
			state.themes.map((theme,i)=>{
				if(theme.value==action.value){
					selectedTheme=theme;
				}
			});
			return Object.assign({},state,{
				theme:selectedTheme,
				themesMenuOpened:false
			});
		case 'TOGGLE_THEMES_MENU':
			return Object.assign({},state,{
				themesMenuOpened:!state.themesMenuOpened
			});
		case 'INPUT_NAME':
			return Object.assign({},state,{
				name:action.name
			});
		case 'INPUT_EMAIL':
			return Object.assign({},state,{
				email:action.email
			});
		case 'INPUT_MESSAGE':
			return Object.assign({},state,{
				message:action.message
			});
		case 'RESET_FORM':
			return Object.assign({},state,{
				name:'',
				email:'',
				theme:'',
				message:''
			});
		case 'SUBMIT_FORM':
			return Object.assign({},state,{
				submitted:true
			});
		default:
			return state;
	}
}

export default defineModule('Форма','/form', Router, reducer);