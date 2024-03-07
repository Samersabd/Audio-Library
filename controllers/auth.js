const crypto =require('crypto');
const bcrypt =require('bcryptjs');

const User = require('../models/User');

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