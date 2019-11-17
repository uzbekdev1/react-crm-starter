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
import {
	Button,
	LinearProgress,
	CircularProgress
} from '@material-ui/core';
import ChevronLeft from '@material-ui/icons/ChevronLeft';

import Title from '../components/Title';
import {LOAD_REQUEST_REQ, LOAD_REQUEST_RES, SAVE_REQ, SAVE_RES} from './index';
import {SET_TITLE} from '../index';

const useStyles = makeStyles(theme => ({
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

export function FormCard({request, match, themes, update, action, saving}) {
  	const classes = useStyles();
  	const [redirect, setRedirect]=React.useState('');

  	const submitHandler=e=>{
  		var inputs=e.target.elements;
  		var data={
  			name:inputs.name.value,
  			email:inputs.email.value,
  			address:inputs.address.value,
  			message:inputs.message.value
  		}
  		if(action==='edit'){
  			data.id=match.params.requestId;	
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
	      		<Grid item xs={6}>
	      			<Link to={'/admin/request'}><Button variant='contained' color='primary'><ChevronLeft /> Back to list</Button></Link>
	      		</Grid>
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
					    	          	required
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
	    	            	    	<TextField
	    	            	          	id="outlined-basic"
	    	            	          	className={classes.textField}
	    	            	          	label={"Address"}
	    	            	         	margin={"normal"}
	    	            	          	variant={"outlined"}
	    	            	          	name={'address'}
	    	            	          	defaultValue={request.address}
	    	            	        />
	    	            	    </Grid>
	    	            	    <Grid item sm={12}>
	    	            	    	<TextField
	    	            	    	    id="outlined-multiline-static"
	    	            	    	    label="Description"
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
		    	            	    <Button type='submit' variant="contained" color="primary" className={classes.button} disabled={saving}>
		    	            	        {saving ? <CircularProgress size={'1rem'} /> : 'Save'}
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

class Form extends React.Component{
	constructor(props){
		super(props);
		this.state={
			action:''
		}
	}
	componentDidMount(){
		const {loadRequest, match, setTitle}=this.props;
		if(match.params.requestId){
			this.setState({action:'edit'});
			setTitle('Edit employee');
			loadRequest(match.params.requestId);
		}else{
			this.setState({action:'add'});
			setTitle('Add employee');
		}
		
	}
	render(){
		console.log('Edit Request',this.props);
		const {match, request, themes, update, loadingRequest, saving}=this.props;
		const {action}=this.state;
		if(!loadingRequest){
			return(
				<FormCard action={action} request={action=='edit'?request:{}} match={match} themes={themes} update={update} saving={saving}/>
			);
		}else{
			return(
				<LinearProgress />
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
		saving:s.saving
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
				type:SAVE_REQ
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
					type:SAVE_RES,
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
)(Form);

export default ListContainer;