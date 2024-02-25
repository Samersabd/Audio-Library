exports.getAddCategory =(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views', 'add-category.html'));

}

exports.postAddProduct=(req, res, next)=>{
    products.push({name: req.body.name, description:req.body.description});
    console.log(req.body);
    res.redirect('/');
}