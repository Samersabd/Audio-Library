const path =require('path');

const express = require('express');

const categoriesController =require('../controllers/category');

const router =express.Router();

const products =[];

router.get('/add-category',categoriesController.getAddCategory);


router.post('/add-category',categoriesController.postAddProduct);

module.exports=router;
exports.products=products;