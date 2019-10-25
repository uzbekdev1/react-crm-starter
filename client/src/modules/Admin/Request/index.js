import List from './List';
import {defineModule} from '../../functions';

const FIRST_ACTION='Default/FirstAction';

export const reducer=(state={name:'DEFAULT'}, action)=>{
	switch(action.type){
		case FIRST_ACTION:
			return {name:'Javlonbek'}
		default:
			return state;
	}
}

export default defineModule('Requests','/request', List,reducer);