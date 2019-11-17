import React from 'react';
import {Route} from 'react-router-dom';

import List from './List';
import Form from './Form';

const Router=(props)=>{
	return(
		<div>
			<Route exact path={props.match.path} component={List} />
			<Route exact path={props.match.path+'/edit/:requestId'} component={Form} />
			<Route exact path={props.match.path+'/add'} component={Form} />
		</div>
	)
}

export default Router;