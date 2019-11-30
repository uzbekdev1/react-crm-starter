import Router from './Router';
import {defineModule} from '../../functions';

const actionPrefix='Admin/Category/';
export const LOAD_ITEMS_REQ=actionPrefix+'LoadItemsReq';
export const LOAD_ITEMS_RES=actionPrefix+'LoadItemsRes';
export const LOAD_ITEM_REQ=actionPrefix+'LoadItemReq';
export const LOAD_ITEM_RES=actionPrefix+'LoadItemRes';
export const SAVE_REQ=actionPrefix+'SaveReq';
export const SAVE_RES=actionPrefix+'SaveRes';
export const SHOW_DELETE_DIALOG=actionPrefix+'ShowDeleteDialog';
export const CLOSE_DELETE_DIALOG=actionPrefix+'CloseDeleteDialog';
export const DELETE_RES=actionPrefix+'DeleteRes';

const defaultState={
	items:[],
	loadingItems:false,
	item:{},
	loadingItem:false,
	deleteDialogOpen:false,
	deleteId:'',
	saving:false
}

export const reducer=(state=defaultState, action)=>{
	switch(action.type){
		case LOAD_ITEM_REQ:
			return {
				...state,
				loadingItem:true
			}
		case LOAD_ITEM_RES:
			var item=action.payload.item;
			return {
				...state,
				item,
				loadingItem:false
			}
		case LOAD_ITEMS_REQ:
			return {
				...state,
				loadingItems:true
			}
		case LOAD_ITEMS_RES:
			return {
				...state,
				loadingItems:false,
				items:action.payload.items
			}
		case SAVE_REQ:
			return {
				...state,
				saving:true
			}
		case SAVE_RES:
			var item=action.payload.item;
			var match=false;
			var items=state.items.map((r,i)=>{
				if(r && r._id === item._id){
					match=true;
					return item;
				}else{
					return r;
				}
			});
			if(!match){
				items.push(item);
			}
			return {
				...state,
				items,
				saving:false
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
			var item=action.payload.item;
			return {
				...state,
				items:state.items.filter((r)=>r._id !== item._id)
			}
		default:
			return state;
	}
}

export default defineModule('Categories','/categories', Router, reducer);