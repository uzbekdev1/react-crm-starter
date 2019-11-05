var mongoose=require('mongoose');
var Types=mongoose.Schema.Types;

var RequestSchema=new mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	email:{
		type:String,
		lowercase:true,
		match: [/\S+@\S+\.\S+/, 'is invalid']
	},
	theme:{
		type:String
	},
	message:{
		type:String
	}
});

module.exports=mongoose.model('Request',RequestSchema);