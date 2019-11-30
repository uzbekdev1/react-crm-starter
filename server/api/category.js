var Category=require('../models/Category');

const categoryAPI={
	get:function(req,res,next){
		if(req.query.id){
			Category.findById(req.query.id,(err,category)=>{
				if(err) return next(err);
				if(category && category._id){
					res.json(category);
				}else{
					res.json({});
				}
			});
		}else{
			Category.find({},(err,categories)=>{
				if(err) return next(err);
				if(categories && categories.length){
					res.json(categories);
				}else{
					res.json([]);
				}
			});
		}
	},
	store:function(req,res,next){
		const b=req.body;

		if(b.id && b.id.length){  // editing
			Category.findById(b.id,(err,category)=>{
				category.name=b.name;
				category.email=b.email;
				category.address=b.address;
				category.message=b.message;

				category.save(function(err,result){
					if(err) return next(err);
					res.json({
						result:'success',
						data:result
					});
				});
			});
		}else{
			var category= new Category;
			category.name=b.name;
			category.userId=req.session.user._id;

			category.save(function(err,result){
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
			Category.findByIdAndRemove(id,(err,r)=>{
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

module.exports=categoryAPI;