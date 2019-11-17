import Request, {reducer as requestReducer} from './Request';
import Dashboard, {reducer as dashboardReducer} from './Dashboard';

import Admin from './Admin';
import {defineModule} from '../functions';

export const SIGN_IN_REQ='Admin/SignInReq';
export const SIGN_IN_RES='Admin/SignInRes';
export const SET_TITLE='Admin/SetTitle';

const defaultState={
	title:'Dashboard'
};

const userReducer=(state={loggedIn:false, authenticating:false},action)=>{
	switch(action.type){
		case SIGN_IN_REQ:
			return{
				...state,
				authenticating:true
			}
		case SIGN_IN_RES:
			var p=action.payload;
			if(p && p.username){
				return {
					...state,
					...action.payload,
					loggedIn:true,
					authenticating:false
				};
			}else{
				return {
					...state,
					loginFailed:true,
					authenticating:false,
					loggedIn:false
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