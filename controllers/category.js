const category = require('../models/category');
const statusCode=require('../errorCodes')

// const categoryObject=new Category;
//  addCategory(categoryObject){

// }
class CategoryController{

    async addCategory(categoryObject){
            const foundCategoryname=await category.findOne({
                name:categoryObject.name,
            }
            );
            if(foundCategoryname){
                console.log('the category already exists');
                // const error =new Error("the category already exists");
                // error.statusCode = statusCode.conflict;
                // throw error;
            }else{
                const cat = new category({
                    name:categoryObject.name,
                    description:categoryObject.description,
                    
                });
            
            console.log('category', cat._id);
            await cat.save();
            return cat;
            }
        }

        async getCategoryById(categoryId){
            const foundCategory =await category.findOne({_id:categoryId});
            if(!foundCategory){
                const error=new Error("Album not found");
                throw error;
            }else{
                return foundCategory;
            }
        }
}
module.exports=CategoryController;
