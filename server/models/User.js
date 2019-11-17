var mongoose=require('mongoose');
var Types=mongoose.Schema.Types;

var UserSchema=new mongoose.Schema({
	name:{
		type:String
	},
	email:{
		type:String,
		lowercase:true,
		match: [/\S+@\S+\.\S+/, 'is invalid']
	},
	username:{
		type:String
	},
	password:{
		type:String
	}
});

module.exports=mongoose.model('User',UserSchema);