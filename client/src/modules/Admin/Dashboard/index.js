import Dashboard from './Dashboard';
import {defineModule} from '../../functions';

const FIRST_ACTION='Dashboard/FirstAction';

export const reducer=(state={name:'DEFAULT'}, action)=>{
	switch(action.type){
		case FIRST_ACTION:
			return {name:'Javlonbek'}
		default:
			return state;
	}
}

export default defineModule('Dashboard','/', Dashboard, reducer);