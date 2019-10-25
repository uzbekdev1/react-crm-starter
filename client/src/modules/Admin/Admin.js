import React from 'react';
import {Route} from 'react-router-dom';

const Admin=(props)=>{
	console.log('Admin',props);

	const routes=props.routes.map((route,index) => {
		return(
        	<Route path={route.path} key={index} component={route.component} title={route.title} />
        );
    });

	return(
		<div>
			<h2>Admin</h2>
			{routes}
		</div>
	)
} 

export default Admin;