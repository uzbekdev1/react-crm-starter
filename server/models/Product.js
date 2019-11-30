var mongoose=require('mongoose');
var Types=mongoose.Schema.Types;

var ProductSchema=new mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	category:{
		type:Types.ObjectId,
		ref:'Category'
	},
	price:{
		type:Number
	},
	userId:{
		type:Types.ObjectId,
		ref:'User'
	}
});

module.exports=mongoose.model('Product',ProductSchema);