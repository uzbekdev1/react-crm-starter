var User=require('../models/User');
var bcrypt=require('bcryptjs');

const userAPI={
	login:(req,res,next)=>{
		User.findOne({username: req.body.username}, function(e, account){
		    if(account != null) {
		        bcrypt.compare(req.body.password, account.password, function(err, match) {
		            if(match){
		                req.session.user = account;
		                result='success';
		                res.json({
		                	result,
		                	user:account
		                });     
		            }else{
		            	res.json({
		            		result:'error',
		            		message:'username and password don\'t match!'
		            	});
		            }
		        });
		    } else {
		    	// bcrypt.hash(req.body.password, 10, function(err, hash) {
		    	// 	var user= new User({
		    	// 		password:hash,
		    	// 		username:req.body.username
		    	// 	});
		    	//     user.save(function(err, result){
		    	//     	if(err) return next(err);
		    	//         console.log('new user added');                       
		    	//     });
		    	// });
		        res.json({
            		result:'error',
            		message:'username and password don\'t match!'
            	});
		    }
		});
	},
	getActive:(req,res,next)=>{
		res.json({
			result:'success',
			user:req.session.user || {}
		});
	},
	logout:(req,res,next)=>{
		req.session.user={};
		res.end();
	}
}

module.exports=userAPI