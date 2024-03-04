const Category = require('../models/category');


exports.getAddCategory =(req, res ,next)=>{
    res.render('add-category',{
        pageTitle: 'Add Category',
        path: 'add-category',
        editing:false
    });
};

exports.postAddProduct = (req, res, next) =>{
    const name=req.body.name;
    const description =req.body.description;
    const createdAt= new Date();
    const updatedAt= '';
    const category = new Category({
        name:name,
        description:description,
        createdAt:createdAt,
        updatedAt:updatedAt
    });
    category
    .save()

    .then(result =>{
        console.log('created Category');
        res.redirect('/');
    })
    .catch(err =>{

    })
}