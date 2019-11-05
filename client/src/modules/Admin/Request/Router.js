import React from 'react';
import {Route} from 'react-router-dom';

import List from './List';
import Edit from './Edit';

const Router=(props)=>{
	return(
		<div>
			<Route exact path={props.match.path} component={List} />
			<Route exact path={props.match.path+'/edit/:requestId'} component={Edit} />
		</div>
	)
}

export default Router;