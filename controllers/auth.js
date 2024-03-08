const crypto =require('crypto');
const {validationResult}=require('express-validator/check');
const bcrypt =require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.Signup=(req,res,next)=>{
    const errora=validationResult(req);
    if(error.isEmpty()){
        const error=new Error('Validation failed');
        error.statusCode =422;
        error.data=error.array();
        throw error;
    }
    const email =req.body.email;
    const name= req.body.name;
    const passsword=req.body.passsword;
    bcrypt
    .hash(passsword, 12)
    .then(hashedPw=>{
        const user=new User({
            email:email,
            passsword:hashedPw,
            name:name
        });
        return user.save();
    });
}

exports.getLogin =(req,res,next)=>{
    let message =req.flash('erro');
    if(message.length>0){
        message=message[0];
    } else {
        message=null;
    }
    res.render('auth/login',{
        path:'/login',
        pageTitle:'Login',
        errorMessage:message
    });
};
exports.getSingup =(req,res,next)=>{
    let message =req.flash('erro');
    if(message.length>0){
        message=message[0];
    } else {
        message=null;
    }
    res.render('auth/signup',{
        path:'/signup',
        pageTitle:'signup',
        errorMessage:message
    });
};

exports.postLogin=(req,res,next)=>{
    const email=req.body.email;
    const password=req.body.password;
    User.findOne({email:email})
    .then(user=>{
        if(!user){
            req.flash('error','Invalid email or passsword.');
            return res.redirect('/login');
        }
        bcrypt
            .compare(password,user.password)
            .then(doMatch=>{
                if(doMatch){
                    req.session.isLoggedIn=true;
                    req.session.user=user;
                    return req.session.save(err=>{
                        console.log(err);
                        res.redirect('/')
                    });
                }
                req.flash('error', 'invalid email or password.');
                res.redirect('/login');
            })
            .catch(err=>{
                console.log(err);
                res.redirect('./login');
            });
    })
    .catch(err=>console.log(err));
};