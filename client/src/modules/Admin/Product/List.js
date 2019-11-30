import React, {useState} from 'react';
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
import {
	Card,
	CardActions,
	CardContent,
	CardHeader,
	TablePagination,
	Checkbox
} from '@material-ui/core';

import Title from '../components/Title';
import SearchBar from '../components/ToolbarSearch';
import {LOAD_ITEMS_REQ, LOAD_ITEMS_RES, SHOW_DELETE_DIALOG, CLOSE_DELETE_DIALOG, DELETE_RES} from './index';
import withTitle from '../withTitle';

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  },
  cardContent:{
  	padding:0
  },
  loader:{
  	margin:'auto'
  },
  addButton:{
  	height:'100%',
  	float:'right'
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

const RequestsTableCard=(props)=>{
  	const classes = useStyles();

  	var header=props.header?(
  		<CardHeader title={props.header} >
  		</CardHeader>
  	) : '';

  	const [rowsPerPage, setRowsPerPage] = useState(10);
  	const [page, setPage] = useState(0);

  	const handlePageChange = (event, page) => {
  	  setPage(page);
  	};

  	const handleRowsPerPageChange = event => {
  	  setRowsPerPage(event.target.value);
  	};

  	return(
	    <Container maxWidth="lg" className={classes.container}>
	      	<Grid container spacing={3}>
	      		<Grid item xs={6}>
	      			<SearchBar placeholder={"search product"}/>
	      		</Grid>
	      		<Grid item xs={6}>
	      			<Link to={props.path+'/add'}>
		      			<Button
		      				className={classes.addButton}
		      			  	color={"primary"}
		      			  	variant="contained"
		      			>
		      			  	Add product
		      			</Button>
		      		</Link>
	      		</Grid>
	        	<Grid item xs={12}>
	          		<Card className={classes.paper}>
	          			<CardContent className={classes.cardContent}>
	          				{header}
					    	<RequestsTable {...props} />
					    </CardContent>
					    <CardActions className={classes.actions}>
					      	<TablePagination
						        component="div"
						        count={props.items ? props.items.length : 0}
						        onChangePage={handlePageChange}
						        onChangeRowsPerPage={handleRowsPerPageChange}
						        page={page}
						        rowsPerPage={rowsPerPage}
						        rowsPerPageOptions={[5, 10, 25]}
					      	/>
					    </CardActions>
	           		</Card>
	         	</Grid>
	       	</Grid>
	    </Container>
  	);
}
RequestsTableCard.propTypes={
	requests:PropTypes.array,
	loading:PropTypes.bool,
	showDeleteDialog:PropTypes.func,
	header:PropTypes.string
}

const RequestsTable=({items, showDeleteDialog, path, loading})=>{
	const classes = useStyles();
	const [selectedItems, setSelectedItems] = useState([]);

	const handleSelectOne = (event, id) => {
  	  	const selectedIndex = selectedItems.indexOf(id);
  	  	let newSelectedItems = [];

  	  	if (selectedIndex === -1) {
  	    	newSelectedItems = newSelectedItems.concat(selectedItems, id);
  	  	} else if (selectedIndex === 0) {
  	    	newSelectedItems = newSelectedItems.concat(selectedItems.slice(1));
  	  	} else if (selectedIndex === selectedItems.length - 1) {
  	    	newSelectedItems = newSelectedItems.concat(selectedItems.slice(0, -1));
  	  	} else if (selectedIndex > 0) {
  	    	newSelectedItems = newSelectedItems.concat(
	  	      	selectedItems.slice(0, selectedIndex),
	  	      	selectedItems.slice(selectedIndex + 1)
  	    	);
  		}

  	  	setSelectedItems(newSelectedItems);
  	};

  	const handleSelectAll = event => {
  	  	let selectedItems;
  	  	if (event.target.checked) {
  	    	selectedItems = items.map(i => i._id);
  	  	} else {
  	    	selectedItems = [];
  	  	}
  	  	setSelectedItems(selectedItems);
  	};

	if(!items || loading){
		return(<CircularProgress className={classes.loader} />);
	}else{
		const requestRows=items.map((r,i)=>{
			return(
				<TableRow key={i}>
					<TableCell>
						<Checkbox
						  checked={selectedItems.indexOf(r._id) !== -1}
						  color={"primary"}
						  onChange={event => handleSelectOne(event, r._id)}
						  value={"true"}
						/>
					</TableCell>
				  	<TableCell>{r.name}</TableCell>
				  	<TableCell>{r.category.name}</TableCell>
				  	<TableCell>{r.price}</TableCell>
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
			      	<TableCell>
			      	  	<Checkbox
				      	    checked={selectedItems.length === items.length}
				      	    color={"primary"}
				      	    indeterminate={
				      	      selectedItems.length > 0 &&
				      	      selectedItems.length < items.length
				      	    }
				      	    onChange={handleSelectAll}
			      	  	/>
			      	</TableCell>
			        <TableCell>Name</TableCell>
			        <TableCell>Category</TableCell>
			        <TableCell>Price</TableCell>
			        <TableCell align="right">Action</TableCell>
			      </TableRow>
			    </TableHead>
			    <TableBody>
			      {requestRows}
			    </TableBody>
			</Table>
		);
	}
}

class List extends React.Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){
		const {items, loadItems, shouldLoadItems}=this.props;
		if(shouldLoadItems){
			loadItems();
		}
	}
	render(){
		console.log('Request List',this.props);
		const {match, items, loadingItems, showDeleteDialog, closeDeleteDialog, deleteDialogOpen, deleteId, header}=this.props;
		return(
			<React.Fragment>
				<RequestsTableCard items={items} loading={loadingItems} path={match ? match.path : '/admin/products'} showDeleteDialog={showDeleteDialog} header={header} />
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
	const s=state.Admin.Product;
	return {
		...s
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {
		loadItems:()=>{
			dispatch({
				type:LOAD_ITEMS_REQ
			});
			return fetch('/api/product/get').then((res)=>res.ok?res.json():[]).then((items)=>{
				dispatch({
					type:LOAD_ITEMS_RES,
					payload:{
						items
					}
				});
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
				return fetch('/api/product/delete',{
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
							payload:{item:json.data}
						});
					}
				});
			}
		}
	}
}

export const ListContainer=connect(
	mapStateToProps,
	mapDispatchToProps
)(List);

export default withTitle(ListContainer)('Products');