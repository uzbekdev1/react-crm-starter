import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';

class Profile extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		console.log('Profile',this.props);
		const {name,match}=this.props;
		return(
			<div>
				<h2>Привет, {name}</h2>
			</div>
		);
	}
}

const Vachach=props=>(<p>Vachaaach</p>);

Profile.propTypes={
	name:PropTypes.string.isRequired
}

const mapStateToProps=(state)=>{
	return state.Profile;
}

const mapDispatchToProps=(dispatch)=>{
	return {}
}

const ProfileContainer=connect(mapStateToProps)(Profile);

export default ProfileContainer;