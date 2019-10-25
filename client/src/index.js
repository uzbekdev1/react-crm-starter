import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import './index.css';

import Root from './core/containers/Root';
import history from './core/history';
import store from './store';
import routes from './routes';

import * as serviceWorker from './serviceWorker';

console.log('routes',routes);
console.log('store',store);

ReactDOM.render(
	<AppContainer>
		<Root
			store={store}
			history={history}
			routes={routes} />
	</AppContainer>,
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
