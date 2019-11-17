var express=require('express');
var router=express.Router();

var requestAPI=require('./request.js');
var userAPI=require('./user.js');

router.get('/request/get',requestAPI.index);
router.post('/request/store',requestAPI.store);  // CREATE and UPDATE
router.post('/request/delete',requestAPI.delete);

router.post('/user/login', userAPI.login);
router.get('/user/active',userAPI.getActive);

router.use(function(req,res){
	res.json({message:'you are requesting my fucking api server'});
});

module.exports=router;