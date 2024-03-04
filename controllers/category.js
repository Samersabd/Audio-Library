const category = require('../models/category');


// const categoryObject=new Category;
//  addCategory(categoryObject){

// }
class CategoryController{
    async addCategory(categoryObject){
        console.log('category');
            const foundCategoryname=await category.findOne({
                name:categoryObject.name,
            });
            if(foundCategoryname){
                const error ="the category already exists";
                throw error;
            }else{
                const cat = new category({
                    name:categoryObject.name,
                    description:categoryObject.description,
                });
            }
            console.log('category', cat._id);
            await cat.save();
            return cat
        }
}









// exports.getAddCategory =(req, res ,next)=>{
//     res.render('add-category',{
//         pageTitle: 'Add Category',
//         path: 'add-category',
//         editing:false
//     });
// };

// exports.postAddProduct = (req, res, next) =>{
//     const name=req.params.name;
//     const description =req.params.description;
//     const createdAt= new Date();
//     const updatedAt= '';
//     const category = new Category({
//         name:name,
//         description:description,
//         createdAt:createdAt,
//         updatedAt:updatedAt
//     });
//     category
//     .save()

//     .then(result =>{
//         console.log('created Category');
//         res.redirect('/');
//     })
//     .catch(err =>{

//     })
// }