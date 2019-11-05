import Request, {reducer as requestReducer} from './Request';
import Dashboard, {reducer as dashboardReducer} from './Dashboard';

import Admin from './Admin';
import {defineModule} from '../functions';

export const SIGN_IN='Admin/SignIn';
export const SET_TITLE='Admin/SetTitle';

const defaultState={
	title:'Dashboard'
};

const userReducer=(state={loggedIn:false},action)=>{
	switch(action.type){
		case SIGN_IN:
			var p=action.payload;
			if(p.email==='admin' && p.password==='123'){  // for now this is static login
				return Object.assign({},state,{
					...action.payload,
					loggedIn:true
				});
			}else{
				return {
					...state,
					loginFailed:true
				}
			}
		default:
			return state;
	}
}

export const reducer=(state=defaultState, action)=>{
	return {
		Dashboard:dashboardReducer(state.Dashboard,action),
		Request:requestReducer(state.Request,action),
		user:userReducer(state.user,action),
		title:((s,a)=>{
			if(a.type===SET_TITLE){
				return a.payload;
			}else{
				return s;
			}
		})(state.title, action)
	}
}

export const children={
	Request,
	Dashboard
}

export default defineModule('Admin','/admin', Admin, reducer, children);