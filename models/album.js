
const mongodb =require('mongodb');
const getDb =require('../util/database').getDb;

class Album{
    constructor(name, description, showNbTracks, createdAt, updatedAt, lastSongAddedAt){
        this.name=name;
        this.description=description;
        this.showNbTracks=showNbTracks;
        this.createdAt=createdAt;
        this.updatedAt=updatedAt;
        this.lastSongAddedAt=lastSongAddedAt;
    }
    save(){
        const db =getDb();
        return db.collection('albums')
        .insertOne(this)
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
