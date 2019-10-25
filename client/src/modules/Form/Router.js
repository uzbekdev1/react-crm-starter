import React from 'react';
import {Route} from 'react-router-dom';

import Form from './Form';

const Router=(props)=>{
	return(
		<div>
			<Route exact path={props.match.path} component={Form} />
			<Route exact path={props.match.path+'/edit'} component={Form} />
		</div>
	)
}

export default Router;