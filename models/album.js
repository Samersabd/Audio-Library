
const mongodb =require('mongodb');
const getDb =require('../util/database').getDb;

class Album{
    constructor(name, description, showNbTracks, createdAt, updatedAt, lastSongAddedAt, id){
        this.name=name;
        this.description=description;
        this.showNbTracks=showNbTracks;
        this.createdAt=createdAt;
        this.updatedAt=updatedAt;
        this.lastSongAddedAt=lastSongAddedAt;
        this._id=id;
    }
    save(){
        const db =getDb();
        let dbOp
        if(this._id){
            //update the product
            dbOp=db.collection('albums').updateOne({_id:new mongodb.ObjectId(this._id)},{$set:this});
        }else{
            dbOp=db.collection('albums').insertOne(this);
        }
        
        return dbOp
        .then(result =>{
            //console.log(result);
            return result;
        })
        .catch(err =>{
            console.log(err);
        });
    
    }
    static fetchAll(){
        return db
        .collection('albums')
        .find()
        .toArray()
        .then(albums =>{
            console.log(albums);
            return albums;
        })
        .catch(err =>{
            console.log(err);
        });
    }
    static findById(albumId){
        const db=db.getDb();
        return db.
        collection('albums').find({_id:new mongodb.objectId(albumId)})
        .next()
        .then(album=>{
            console.log(album);
            return album
        })
        .catch(err=>{
            console.log(err);
        })
    }

    static deleteById(albumId){
        const db=db.getDb();
        return db
        .collection('albums')
        .deleteOne({_id:new mongodb.objectId(albumId)})
        .then(result =>{
            console.log('Deleted');
        })
        .catch(err=>{
            console.log(err);
        });
    }
}


module.exports =Album;
