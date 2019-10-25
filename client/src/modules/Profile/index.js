import Profile from './Profile';
import {defineModule} from '../functions';

const SET_NAME='Profile/SetName';

const reducer=(state={name:'Жавлонбек'}, action)=>{
	switch(action.type){
		case SET_NAME:
			return {name:action.name}
		default:
			return state;
	}
}

export default defineModule('Личный кабинет','/profile', Profile,reducer);