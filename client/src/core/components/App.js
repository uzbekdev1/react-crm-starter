import React from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';

import Home from '../../modules/Form/Home';

const App=(props)=>{
	console.log('App',props);
	const routes=props.routes.map((route,index) => {
		if(route.routes && route.routes.length){
			return(
				<Route path={route.path} key={route.path} render={(props)=>{
					return(	
						<route.component {...props} title={route.title} routes={route.routes} />
					);
				}} />
			);
		}else{
			return(
	        	<Route path={route.path} key={route.path} component={route.component} />
	        );
		}
		
    });

	return(
		<div>
			<Route exact path={props.match.path} component={Home} />
			{routes}
		</div>
	);
}

App.propTypes={
	title:PropTypes.string.isRequired
}

export default App;