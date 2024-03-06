const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tracksSchema = new Schema ({
    name: {
        type : String,
        required: true
    },
    singer: {
        type : String,
        required: true
    },
    categoryId: {
        type : Schema.Types.ObjectId,
        ref: "Category",
    },
    albumId: {
        type : Schema.Types.ObjectId,
        ref: "Album",
    },
    createdBy:{
        type:String,
        ref:'User',
    },
    updatedby:{
        type:String,
        ref:'User',
    }
},


);
tracksSchema.index({categoryId:1});
tracksSchema.index({albumId:1});
module.exports = mongoose.model('Tracks', tracksSchema );


// class Track{
//     constructor(name, singer, category, album){
//         this.name=name;
//         this.singer=singer;
//         this.category=category;
//         this.album=album;
//     }
    
//     save(){
//         const db =getDb();
//         return db.collection('songs')
//         .insertOne(this)
//         .then(result =>{
//             return this._id;
//         })
//         .catch(err =>{
//             console.log(err);
//         });
//     }

//     static deleteById(trackId){
//         const db=db.getDb();
//         return db
//         .collection('songs')
//         .deleteOne({_id:new mongodb.objectId(trackId)})
//         .then(result =>{
//             console.log('Deleted');
//         })
//         .catch(err=>{
//             console.log(err);
//         });
//     }

// }

// module.exports =Track;
