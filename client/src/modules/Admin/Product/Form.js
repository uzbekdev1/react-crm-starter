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
import {
	LOAD_ITEM_REQ, 
	LOAD_ITEM_RES, 
	SAVE_REQ, 
	SAVE_RES
} from './index';
import {
	LOAD_ITEMS_REQ as LOAD_CATEGORIES_REQ, 
	LOAD_ITEMS_RES as LOAD_CATEGORIES_RES
} from '../Category';
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

export function FormCard({item, match, categories, update, action, saving}) {
  	const classes = useStyles();
  	const [redirect, setRedirect]=React.useState('');

  	const submitHandler=e=>{
  		var inputs=e.target.elements;
  		var data={
  			name:inputs.name.value,
  			price:inputs.price.value,
  			category:inputs.category.value
  		}
  		if(action==='edit'){
  			data.id=match.params.itemId;	
  		}

  		update(data).then((json)=>{
  			if(json.result==='success'){
  				setRedirect('/admin/products');
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
	      			<Link to={'/admin/products'}><Button variant='contained' color='primary'><ChevronLeft /> Back to list</Button></Link>
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
					    	          	defaultValue={item.name}
					    	          	required
					    	        />
					    	    </Grid>
					    	    <Grid item sm={6}>
	    	        		    	<SelectMenu options={categories} value={item.category ? item.category._id : ''} />
	    	            	    </Grid>
	    	            	    <Grid item sm={12}>
	    	            	    	<TextField
	    	            	          	id="outlined-basic"
	    	            	          	className={classes.textField}
	    	            	          	label={"Price"}
	    	            	         	margin={"normal"}
	    	            	          	variant={"outlined"}
	    	            	          	name={'price'}
	    	            	          	defaultValue={item.price}
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

const SelectMenu=props=>{
	const [option, setOption] = React.useState(props.value);
	const classes = useStyles();
	const inputLabel = React.useRef(null);
	const [labelWidth, setLabelWidth] = React.useState(0);

	React.useEffect(() => {
	    setLabelWidth(inputLabel.current.offsetWidth);
	}, []);

	const handleChange = event => {
	   	setOption(event.target.value);
	};

	const menuItems=props.options.map((th,i)=>{
		return(
			<MenuItem key={i} value={th._id}>{th.name}</MenuItem>
		)
	});

	return(
    	<FormControl variant="outlined" margin="normal" className={classes.themesSelect}>
    	    <InputLabel ref={inputLabel} id={"demo-simple-select-outlined-label"}>
    	        Category
    	    </InputLabel>
    	    <Select
	          	labelId="demo-simple-select-outlined-label"
	          	id="demo-simple-select-outlined"
	          	name={'category'}
	          	value={option}
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
			action:this.props.match.params.itemId ? 'edit' : 'add'
		}
	}
	componentDidMount(){
		const {loadItem, match, setTitle, loadCategories, categories}=this.props;
		if(match.params.itemId){
			setTitle('Edit product');
			loadItem(match.params.itemId);
		}else{
			setTitle('Add product');
		}
		
		if(!categories.length){
			loadCategories();
		}
	}
	render(){
		console.log('Edit item',this.props);
		const {match, item, update, loadingItem, saving, categories}=this.props;
		const {action}=this.state;
		if(!loadingItem){
			return(
				<FormCard action={action} item={action=='edit'?item:{}} match={match} categories={categories} update={update} saving={saving}/>
			);
		}else{
			return(
				<LinearProgress />
			)
		}
	}
}

const mapStateToProps=(state)=>{
	const s=state.Admin.Product;
	const c=state.Admin.Category;
	return {
		items:s.items,
		item:s.item,
		loadingItem:s.loadingItem,
		saving:s.saving,
		categories:c.items
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {
		loadItem:(itemId)=>{
			dispatch({type:LOAD_ITEM_REQ});
			return fetch('/api/product/get?id='+itemId).then((res)=>res.ok?res.json():{}).then((json)=>{
				dispatch({
					type:LOAD_ITEM_RES,
					payload:{
						item:json
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
			return fetch('/api/product/store',{
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
						item:json.data,
						result:json.result
					}
				});
				return json;
			});
		},
		loadCategories:()=>{
			dispatch({
				type:LOAD_CATEGORIES_REQ
			});
			return fetch('/api/category/get').then((res)=>res.ok?res.json():[]).then((items)=>{
				dispatch({
					type:LOAD_CATEGORIES_RES,
					payload:{
						items
					}
				});
			});
		}
	}
}

const ListContainer=connect(
	mapStateToProps,
	mapDispatchToProps
)(Form);

export default ListContainer;