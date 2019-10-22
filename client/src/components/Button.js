import React from 'react';
import styled from 'styled-components';

const Button=styled.button`
	cursor: pointer;
	background-color: #13c98a;
	line-height:1;
	font-size: 16px;
	border:0;
	border-radius: 3rem;
	color: #fff;
	padding: 1em 3rem;
	&:hover {
	  	background-color: #2e09b6;
	}
`;

export default Button;