const getDb =require('../util/database').getDb;

class Category{
    constructor(name, description, createdAt, updatedAt){
        this.name=name;
        this.description=description;
        this.createdAt=createdAt;
        this.updatedAt=updatedAt;
    }
    
    save(){
        const db =getDb();
        return db.collection('categories')
        .insertOne(this)
        .then(result =>{
           // console.log(result);
            return this._id;
        })
        .catch(err =>{
            console.log(err);
        });
    }

   

}

module.exports =Category;
