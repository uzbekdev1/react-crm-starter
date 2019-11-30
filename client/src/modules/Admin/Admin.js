import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';

import Layout from './Layout';
import Login from './Login';
import withAuth from './withAuth';
import theme from './theme';

class Admin extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		const props=this.props;
		console.log('Admin',props);

	    if(props.location.pathname!==(props.match.path+'/login')){
    		const routes=props.routes.map((route,index) => {
    			return(
    	        	<Route exact={route.path===props.match.path+'/'} path={route.path} key={route.path} component={withAuth(route.component, route.title)} title={route.title} />
    	        );
    	    });

	    	var layout=(
	    		<Layout {...props} >
					{routes}
				</Layout>
	    	);
	    }else{
	    	layout='';
	    }

		return(
			<ThemeProvider theme={theme}>
				<Route exact path={props.match.path+'/login'} component={Login} />
				{layout}
			</ThemeProvider>
		);
	}
}

export default Admin;