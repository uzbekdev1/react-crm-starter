import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {Router, Route} from 'react-router-dom';

const Root=(props)=>{
	console.log('Roots',props);
	console.log('state',props.store.getState());
	return(
		<Provider store={props.store}>
			<Router history={props.history}>
				{props.routes.map((route,index) => (
		            <Route key={index} path={route.path} render={(props) => {
		            	return(
		              		<route.component {...props} routes={route.routes} title={route.title} />
		              	);
		            }} />
		        ))}
			</Router>
		</Provider>
	);
}

Root.propTypes={
	history:PropTypes.object.isRequired,
	routes:PropTypes.array.isRequired,
	store:PropTypes.object.isRequired
}

export default Root;