var Request=require('../models/Request');

const requestAPI={
	index:function(req,res,next){
		if(req.query.id){
			Request.findById(req.query.id,(err,request)=>{
				if(err) return next(err);
				if(request && request._id){
					res.json(request);
				}else{
					res.json({});
				}
			});
		}else{
			Request.find({userId:req.session.user._id},(err,requests)=>{
				if(err) return next(err);
				if(requests && requests.length){
					res.json(requests);
				}else{
					res.json([]);
				}
			});
		}
	},
	store:function(req,res,next){
		const b=req.body;

		if(b.id && b.id.length){  // editing
			Request.findById(b.id,(err,request)=>{
				request.name=b.name;
				request.email=b.email;
				request.address=b.address;
				request.message=b.message;
				request.userId=req.session.user._id;

				request.save(function(err,result){
					if(err) return next(err);
					res.json({
						result:'success',
						data:result
					});
				});
			});
		}else{
			var request= new Request;
			request.name=b.name;
			request.email=b.email;
			request.address=b.address;
			request.message=b.message;
			request.userId=req.session.user._id;

			request.save(function(err,result){
				if(err) return next(err);
				res.json({
					result:'success',
					data:result
				});
			});
		}
	},
	delete:function(req,res,next){
		const id=req.body.id;
		console.log(req.body);
		if(id){
			Request.findByIdAndRemove(id,(err,r)=>{
				if(err) return next(err);
				if(r && r._id){
					res.json({
						result:'success',
						data:r
					});
				}else{
					res.json({
						result:'error',
						message:'not-found'
					});
				}
			});
		}else{
			res.json({
				result:'error',
				message:'id-not-given'
			});
		}
	}
}

module.exports=requestAPI