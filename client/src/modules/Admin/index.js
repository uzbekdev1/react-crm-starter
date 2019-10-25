import Request, {reducer as RequestReducer} from './Request';

import Admin from './Admin';
import {defineModule} from '../functions';

const FIRST_ACTION='Default/FirstAction';

const defaultState={};

export const reducer=(state=defaultState, action)=>{
	return {
		Dashboard:((state,action)=>state)(state.Dashboard),
		Request:RequestReducer(state.Request,action)
	}
}

const children={
	Request
}

export default defineModule('Admin','/admin', Admin, reducer, children);