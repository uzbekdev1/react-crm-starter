import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Route, Link, Redirect} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import Title from '../components/Title';
import {LOAD_REQUEST_REQ, LOAD_REQUEST_RES, UPDATE_REQ, UPDATE_RES} from './index';
import {SET_TITLE} from '../index';

const useStyles = makeStyles(theme => ({
  	seeMore: {
    	marginTop: theme.spacing(3),
  	},
  	container: {
    	paddingTop: theme.spacing(4),
    	paddingBottom: theme.spacing(4),
  	},
  	paper: {
	    padding: theme.spacing(2),
	    display: 'flex',
	    overflow: 'auto',
	    flexDirection: 'column',
  	},
  	textField: {
      	width: '100%'
    },
    themesSelect:{
    	width:'100%'
    },
    button:{
    	float:'right'
    }
}));

export function EditForm({request, match, themes, update}) {
  	const classes = useStyles();
  	const [redirect, setRedirect]=React.useState('');

  	const submitHandler=e=>{
  		var inputs=e.target.elements;
  		var data={
  			id:match.params.requestId,
  			name:inputs.name.value,
  			email:inputs.email.value,
  			theme:inputs.theme.value,
  			message:inputs.message.value
  		}
  		update(data).then((json)=>{
  			if(json.result==='success'){
  				setRedirect('/admin/request');
  			}
  		});
  		e.preventDefault();
  	}

  	if(redirect){
  		console.log('redirecting',redirect);
  		return(
  			<Redirect to={redirect} />
  		);
  	}

  	return (
	    <Container maxWidth="lg" className={classes.container}>
	      	<Grid container spacing={3}>
	        	<Grid item xs={12}>
	          		<Paper className={classes.paper}>
					    <form onSubmit={submitHandler}>
					    	<Grid container spacing={3} >
						    	<Grid item sm={6}>
							    	<TextField
					    	          	id="outlined-basic"
					    	          	className={classes.textField}
					    	          	label={"Name"}
					    	         	margin="normal"
					    	          	variant="outlined"
					    	          	name='name'
					    	          	defaultValue={request.name}
					    	        />
					    	    </Grid>
					    	    <Grid item sm={6}>
	    	        		    	<TextField
	    	            	          	id="outlined-basic"
	    	            	          	className={classes.textField}
	    	            	          	label={"Email"}
	    	            	         	margin={"normal"}
	    	            	          	variant={"outlined"}
	    	            	          	name={'email'}
	    	            	          	defaultValue={request.email}
	    	            	        />
	    	            	    </Grid>
	    	            	    <Grid item sm={12}>
	    	            	    	<ThemesSelectMenu theme={request.theme} themes={themes}/>
	    	            	    </Grid>
	    	            	    <Grid item sm={12}>
	    	            	    	<TextField
	    	            	    	    id="outlined-multiline-static"
	    	            	    	    label="Message"
	    	            	    	    multiline
	    	            	    	    rows="4"
	    	            	    	    defaultValue={request.message}
	    	            	    	    className={classes.textField}
	    	            	    	    margin={"normal"}
	    	            	    	    variant={"outlined"}
	    	            	    	    name='message'
	    	            	    	/>
	    	            	    </Grid>
	    	            	    <Grid item sm={12}>
		    	            	    <Button type='submit' variant="contained" color="primary" className={classes.button}>
		    	            	        Save
		    	            	    </Button>
		    	            	</Grid>
	    	            	</Grid>
				    	</form>
	           		</Paper>
	         	</Grid>
	       	</Grid>
	    </Container>
  	);
}

const ThemesSelectMenu=props=>{
	const [theme, setTheme] = React.useState(props.theme);
	const classes = useStyles();
	const inputLabel = React.useRef(null);
	const [labelWidth, setLabelWidth] = React.useState(0);

	React.useEffect(() => {
	    setLabelWidth(inputLabel.current.offsetWidth);
	}, []);

	const handleChange = event => {
	   	setTheme(event.target.value);
	};

	const menuItems=props.themes.map((th,i)=>{
		return(
			<MenuItem value={th.name}>{th.name}</MenuItem>
		)
	});

	return(
    	<FormControl variant="outlined" className={classes.themesSelect}>
    	    <InputLabel ref={inputLabel} id={"demo-simple-select-outlined-label"}>
    	        Theme
    	    </InputLabel>
    	    <Select
	          	labelId="demo-simple-select-outlined-label"
	          	id="demo-simple-select-outlined"
	          	name={'theme'} 
	          	value={theme}
	          	onChange={handleChange}
	          	labelWidth={labelWidth}
    	    >
    	        {menuItems}
    	    </Select>
    	</FormControl>
	)
}

class Edit extends React.Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){
		const {requests, loadRequest, match, setTitle}=this.props;
		setTitle('Edit employee');
		loadRequest(match.params.requestId);
	}
	render(){
		console.log('Edit Request',this.props);
		const {match, request, themes, update, loadingRequest}=this.props;
		if(!loadingRequest){
			return(
				<EditForm request={request} match={match} themes={themes} update={update} />
			);
		}else{
			return(
				<div>loading...</div>
			)
		}
	}
}

const mapStateToProps=(state)=>{
	const s=state.Admin.Request
	return {
		requests:s.requests,
		request:s.request,
		loadingRequest:s.loadingRequest,
		themes:state.Form.themes
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {
		loadRequest:(requestId)=>{
			dispatch({type:LOAD_REQUEST_REQ});
			return fetch('/api/request/get?id='+requestId).then((res)=>res.ok?res.json():{}).then((json)=>{
				dispatch({
					type:LOAD_REQUEST_RES,
					payload:{
						request:json
					}
				});
			});
		},
		setTitle:(title)=>{
			dispatch({
				type:SET_TITLE,
				payload:title
			});
		},
		update:(data)=>{
			dispatch({
				type:UPDATE_REQ
			});
			return fetch('/api/request/store',{
				method:'POST',
				body:JSON.stringify(data),
				headers: {
			        'Accept': 'application/json',
			        'Content-Type': 'application/json'
			    }
			}).then((res)=>res.ok?res.json():{}).then((json)=>{
				dispatch({
					type:UPDATE_RES,
					payload:{
						request:json.data,
						result:json.result
					}
				});
				return json;
			});
		}
	}
}

const ListContainer=connect(
	mapStateToProps,
	mapDispatchToProps
)(Edit);

export default ListContainer;