import {createBrowserHistory} from 'history';

const history=createBrowserHistory();

history.listen((location)=>{
	console.log('history is listening: '+location);
	// do some stuff
});

export default history;