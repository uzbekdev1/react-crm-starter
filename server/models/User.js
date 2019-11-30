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
	},
	role:{   // might be: 'admin' || 'org'
		type:String
	},
	rights:[{  // list of names of modules, accessible for the user
		type:String
	}]
});

module.exports=mongoose.model('User',UserSchema);