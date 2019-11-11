import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Route, Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CircularProgress from '@material-ui/core/CircularProgress';

import Title from '../components/Title';
import {LOAD_REQUESTS_REQ, LOAD_REQUESTS_RES, SHOW_DELETE_DIALOG, CLOSE_DELETE_DIALOG, DELETE_RES} from './index';
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
    flexDirection: 'column'
  },
  loader:{
  	margin:'auto'
  }
}));

function DeleteConfirmationDialog(props) {
  const { onClose,  open, deleteId, ...other} = props;

  	return (
	    <Dialog
	      	disableBackdropClick
	      	disableEscapeKeyDown
	      	maxWidth="xs"
	     	aria-labelledby="confirmation-dialog-title"
	      	open={open}
	      	{...other}
	    >
	      	<DialogContent dividers>
	      		Are you sure to delete this item? You will not be able to recover this
	      	</DialogContent>
	      	<DialogActions>
	        	<Button autoFocus onClick={(e)=>onClose('cancel')} color="primary">
	          		Cancel
	        	</Button>
	        	<Button onClick={(e)=>onClose('ok',deleteId)} color="primary">
	          		Ok
	        	</Button>
	      	</DialogActions>
	    </Dialog>
  	);
}

export function RequestsTableCard(props){
  	const classes = useStyles();

  	var header=props.header?(
  		<Title>{props.header}</Title>
  	) : '';

  	return(
	    <Container maxWidth="lg" className={classes.container}>
	      	<Grid container spacing={3}>
	        	<Grid item xs={12}>
	          		<Paper className={classes.paper}>
	          			{header}
					    <RequestsTable {...props} />
	           		</Paper>
	         	</Grid>
	       	</Grid>
	    </Container>
  	);
}

const RequestsTable=({requests, showDeleteDialog, path, loading})=>{
	const classes = useStyles();
	if(loading){
		return(<CircularProgress className={classes.loader} />);
	}

	requests=requests.map((r,i)=>{
		return(
			<TableRow key={i}>
			  	<TableCell>{r.name}</TableCell>
			  	<TableCell>{r.email}</TableCell>
			  	<TableCell>{r.theme}</TableCell>
			  	<TableCell>{r.message}</TableCell>
			  	<TableCell align="right">
			  		<Link to={path+'/edit/'+r._id}>
			  			<Fab color='secondary' size='small' aria-label='Edit'>
			  				<EditIcon />
			  			</Fab>
			  		</Link>
			  		<Fab size='small' aria-label='Delete' className='ml-2' onClick={(e)=>showDeleteDialog(r._id)}>
			  			<DeleteIcon />
			  		</Fab>
			  	</TableCell>
			</TableRow>
		);
	});

	return(
		<Table size="small">
		    <TableHead>
		      <TableRow>
		        <TableCell>Name</TableCell>
		        <TableCell>Email</TableCell>
		        <TableCell>Theme</TableCell>
		        <TableCell>Message</TableCell>
		        <TableCell align="right">Action</TableCell>
		      </TableRow>
		    </TableHead>
		    <TableBody>
		      {requests}
		    </TableBody>
		</Table>
	);
}

class List extends React.Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){
		const {requests, loadRequests}=this.props;
		this.props.setTitle('Employees');
		if(!(requests && requests.length)){
			loadRequests();
		}
	}
	render(){
		console.log('Request List',this.props);
		const {match, requests, loadingRequests, showDeleteDialog, closeDeleteDialog, deleteDialogOpen, deleteId, header}=this.props;
		return(
			<React.Fragment>
				<RequestsTableCard requests={requests} loading={loadingRequests} path={match ? match.path : '/admin/request'} showDeleteDialog={showDeleteDialog} header={header} />
				<DeleteConfirmationDialog
				  	id="ringtone-menu"
				  	deleteId={deleteId}
				  	keepMounted
				  	open={deleteDialogOpen}
				  	onClose={closeDeleteDialog}
				/>
			</React.Fragment>
		);
	}
}

List.propTypes={
	name:PropTypes.string
}

const mapStateToProps=(state)=>{
	const s=state.Admin.Request
	return {
		...s
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {
		loadRequests:()=>{
			dispatch({
				type:LOAD_REQUESTS_REQ
			});
			return fetch('/api/request/get').then((res)=>res.ok?res.json():[]).then((requests)=>{
				dispatch({
					type:LOAD_REQUESTS_RES,
					payload:{
						requests
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
		showDeleteDialog:(deleteId)=>{
			dispatch({
				type:SHOW_DELETE_DIALOG,
				payload:{deleteId}
			});
		},
		closeDeleteDialog:(action, deleteId)=>{
			dispatch({type:CLOSE_DELETE_DIALOG});
			console.log('close',action);
			if(action==='ok' && deleteId){
				var b={
					id:deleteId
				}
				return fetch('/api/request/delete',{
					method:'POST',
					body:JSON.stringify(b),
					headers: {
				        'Accept': 'application/json',
				        'Content-Type': 'application/json'
				    }
				}).then((res)=>res.ok?res.json():{}).then((json)=>{
					if(json.result && json.result==='success'){
						dispatch({
							type:DELETE_RES,
							payload:{request:json.data}
						});
					}
				});
			}
		}
	}
}

const ListContainer=connect(
	mapStateToProps,
	mapDispatchToProps
)(List);

export default ListContainer;