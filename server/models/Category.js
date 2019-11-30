var mongoose=require('mongoose');
var Types=mongoose.Schema.Types;

var CategorySchema=new mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	userId:{
		type:Types.ObjectId,
		ref:'User'
	}
});

module.exports=mongoose.model('Category',CategorySchema);