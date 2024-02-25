const path =require('path');

const express = require('express');

const categoriesController =require('../controllers/category');

const router =express.Router();

const products =[];

router.get('/add-category',categoriesController.getAddCategory);


router.post('/add-category',(req, res, next)=>{
    products.push({name: req.body.name, description:req.body.description});
    console.log(req.body);

    res.redirect('/');
    // next();
});

module.exports=router;
exports.products=products;