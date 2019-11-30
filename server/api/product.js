var Product=require('../models/Product');

const productAPI={
	get:function(req,res,next){
		if(req.query.id){
			Product.findById(req.query.id).populate('category').exec((err,product)=>{
				if(err) return next(err);
				if(product && product._id){
					res.json(product);
				}else{
					res.json({});
				}
			});
		}else{
			Product.find({}).populate('category').exec((err,categories)=>{
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
			Product.findById(b.id,(err,product)=>{
				product.name=b.name;
				product.price=b.price;
				product.category=b.category;
				//product.userId=req.session.user._id;

				product.save(function(err,result){
					if(err) return next(err);
					result.populate('category',(err,populatedProduct)=>{
						res.json({
							result:'success',
							data:populatedProduct
						});
					});
				});
			});
		}else{
			var product= new Product;
			product.name=b.name;
			product.price=b.price;
			product.category=b.category;
			product.userId=req.session.user._id;

			product.save(function(err,result){
				if(err) return next(err);
				result.populate('category',(err,populatedProduct)=>{
					res.json({
						result:'success',
						data:populatedProduct
					});
				});
			});
		}
	},
	delete:function(req,res,next){
		const id=req.body.id;
		console.log(req.body);
		if(id){
			Product.findByIdAndRemove(id,(err,r)=>{
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

module.exports=productAPI;