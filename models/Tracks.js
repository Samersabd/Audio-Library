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
    category: {
        type : Schema.Types.ObjectId,
        required: true,
        ref: "Category",
    },
    album: {
        type : Schema.Types.ObjectId,
        required: true,
        ref: "Category",
        ref: "Category",
    }
},
    {timestamps:true}

);

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
