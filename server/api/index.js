var express=require('express');
var router=express.Router();

var requestAPI=require('./request.js');

router.get('/request/get',requestAPI.index);
router.post('/request/store',requestAPI.store);  // CREATE and UPDATE
router.post('/request/delete',requestAPI.delete);

router.use(function(req,res){
	res.send('you are requesting my fucking api server');
});

module.exports=router;