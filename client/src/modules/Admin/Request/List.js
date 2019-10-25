import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';

class Default extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		console.log('Default',this.props);
		const {name,match}=this.props;
		return(
			<div>
				<h2>Request List</h2>
			</div>
		);
	}
}

Default.propTypes={
	name:PropTypes.string
}

const mapStateToProps=(state)=>{
	return {
		...state.Default
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {}
}

const DefaultContainer=connect(mapStateToProps)(Default);

export default DefaultContainer;