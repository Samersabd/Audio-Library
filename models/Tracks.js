

const getDb =require('../util/database').getDb;

class Track{
    constructor(name, singer, category, album){
        this.name=name;
        this.singer=singer;
        this.category=category;
        this.album=album;
    }
    
    save(){
        const db =getDb();
        return db.collection('songs')
        .insertOne(this)
        .then(result =>{
            return this._id;
        })
        .catch(err =>{
            console.log(err);
        });
    }

    static deleteById(trackId){
        const db=db.getDb();
        return db
        .collection('songs')
        .deleteOne({_id:new mongodb.objectId(trackId)})
        .then(result =>{
            console.log('Deleted');
        })
        .catch(err=>{
            console.log(err);
        });
    }

}

module.exports =Track;
