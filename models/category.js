const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categorySchema = new Schema ({
    name: {
        type : String,
        required: true
    },
    description: {
        type : String,
        required: true
    },
 
},
    {timestamps:true}
);

module.exports = mongoose.model('Category', categorySchema );



// class Category{
//     constructor(name, description, createdAt, updatedAt){
//         this.name=name;
//         this.description=description;
//         this.createdAt=createdAt;
//         this.updatedAt=updatedAt;
//     }
    
//     save(){
//         const db =getDb();
//         return db.collection('categories')
//         .insertOne(this)
//         .then(result =>{
//            // console.log(result);
//             return this._id;
//         })
//         .catch(err =>{
//             console.log(err);
//         });
//     }

   

// }

// module.exports =Category;
