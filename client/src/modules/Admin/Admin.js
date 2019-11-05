import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

import Layout from './Layout';
import Login from './Login';

const Admin=(props)=>{
	console.log('Admin',props);

	const routes=props.routes.map((route,index) => {
		return(
        	<Route exact={route.path===props.match.path+'/'} path={route.path} key={route.path} component={route.component} title={route.title} />
        );
    });

    if((!props.user && !props.user.loggedIn) && props.location.pathname!==(props.match.path+'/login')){
    	return(
    		<Redirect to={props.match.path+'/login'} />
    	)
    }else if(props.location.pathname!==(props.match.path+'/login')){
    	var layout=(
    		<Layout {...props} >
				{routes}
			</Layout>
    	);
    }else{
    	layout='';
    }

	return(
		<div>
			<Route exact path={props.match.path+'/login'} component={Login} />
			{layout}
		</div>
	)
}

const mapStateToProps=state=>{
	return {
		user:state.Admin.user,
		title:state.Admin.title
	}
}

const AdminContainer=connect(mapStateToProps)(Admin);

export default AdminContainer;