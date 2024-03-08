const exValidator =require('express-validator');
const express=require('express');
class Controller{
    constructor(){
        this.path="/custom";
        this.router=express.Router();
        this.initilizeRoutes();
    }
    async getCustomWidgetData(req,res,next){
        try{
            
        }catch(err){

        }
    }
}
initilizeRoutes(){
}
module.exports=Controller;