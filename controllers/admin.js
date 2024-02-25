const category = require('category');
const Category = require('../models/category');

exports.getAddCategory =(req, res ,next)=>{
    res.render('admin/edit-category',{
        pageTitle: 'Add Category',
        path: 'admin/add-category',
        editing:false
    });
};

exports.postAddProduct = (req, res, next) =>{
    const name=req.body.name;
    const description =req.body.description;
    const createdAt= new Date();
    const updatedAt= '';
    const category = new Category(name,description,createdAt,updatedAt);
    category
    .save()
    .then(result =>{
        console.log('created Category');
        res.redirect('/admin/categories');
    })
    .catch(err =>{

    })
}