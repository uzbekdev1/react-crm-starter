// ******        This module is being used as Employee  ******

import Router from './Router';
import {defineModule} from '../../functions';

const actionPrefix='Admin/Request/';
export const LOAD_REQUESTS_REQ=actionPrefix+'LoadRequestsReq';
export const LOAD_REQUESTS_RES=actionPrefix+'LoadRequestsRes';
export const LOAD_REQUEST_REQ=actionPrefix+'LoadRequestReq';
export const LOAD_REQUEST_RES=actionPrefix+'LoadRequestRes';
export const UPDATE_REQ=actionPrefix+'UpdateReq';
export const UPDATE_RES=actionPrefix+'UpdateRes';
export const SHOW_DELETE_DIALOG=actionPrefix+'ShowDeleteDialog';
export const CLOSE_DELETE_DIALOG=actionPrefix+'CloseDeleteDialog';
export const DELETE_RES=actionPrefix+'DeleteRes';

const defaultState={
	requests:[],
	loadingRequests:false,
	request:{},
	loadingRequest:false,
	deleteDialogOpen:false,
	deleteId:''
}

export const reducer=(state=defaultState, action)=>{
	switch(action.type){
		case LOAD_REQUEST_REQ:
			return {
				...state,
				loadingRequest:true
			}
		case LOAD_REQUEST_RES:
			var request=action.payload.request;
			return {
				...state,
				request,
				loadingRequest:false
			}
		case LOAD_REQUESTS_REQ:
			return {
				...state,
				loadingRequests:true
			}
		case LOAD_REQUESTS_RES:
			return {
				...state,
				loadingRequests:false,
				requests:action.payload.requests
			}
		case UPDATE_RES:
			var request=action.payload.request;
			return {
				...state,
				requests:state.requests.map((r,i)=>{
					if(r._id === request._id){
						return request;
					}else{
						return r;
					}
				})
			}
		case SHOW_DELETE_DIALOG:
			return{
				...state,
				deleteDialogOpen:true,
				deleteId:action.payload.deleteId
			}
		case CLOSE_DELETE_DIALOG:
			return{
				...state,
				deleteDialogOpen:false
			}
		case DELETE_RES:
			var request=action.payload.request;
			return {
				...state,
				requests:state.requests.filter((r)=>r._id !== request._id)
			}
		default:
			return state;
	}
}

export default defineModule('Requests','/request', Router, reducer);