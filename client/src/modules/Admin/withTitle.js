import React from 'react';
import {connect} from 'react-redux';

import {SET_TITLE} from './index';

const withTitle=(Component)=>(title)=>{
	const ComponentWithTitle=(props)=>{
		props.setTitle(title);

		return(
			<Component />
		);
	}

	const mapDispatchToProps=dispatch=>({
		setTitle:(title)=>{
			dispatch({
				type:SET_TITLE,
				payload:title
			});
		}
	});

	return connect(null, mapDispatchToProps)(ComponentWithTitle);
}

export default withTitle;