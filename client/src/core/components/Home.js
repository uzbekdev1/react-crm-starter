import React from 'react';
import PropTypes from 'prop-types';

const Home=(props)=>(
	<div>
		<h1>Home</h1>
		{props.children}
	</div>
);

// Home.propTypes={
// 	title:PropTypes.string.isRequired
// }

export default Home;