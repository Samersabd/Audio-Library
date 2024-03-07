const album =require('../models/album');
const Tarckservice=require('./Tracks');
class AlbumController{
    async addAlbum(albumObject){
        const foundalbumname=await album.findOne({
            name:albumObject.name,
        }
        );
        if(foundalbumname){
            console.log('the album already exists');
            // const error =new Error("the category already exists");
            // error.statusCode = statusCode.conflict;
            // throw error;
        }else{
            const alb = new album({
                name:albumObject.name,
                description:albumObject.description,
                
            });
        
        console.log('album', alb._id);
        await alb.save();
        return alb;
        }
    }

    async getAlbumById(albumId){
        const foundAlbum =await album.findOne({_id:albumId});
        if(!foundAlbum){
            const error=new Error("Album not found");
            throw error;
        }else{
            return foundAlbum;
        }
    }

    async updateAlbum(albumId, albumObject){
        const newalbum=await album.findOne({_id:albumId});
        if(!newalbum){
            throw new Error('Album Not Found');
        }
        await album.updateOne({_id:albumId},{$set:albumObject});
    }
    async deleteAlbum(albumId){
        await album.deleteOne({_id:albumId});
        console.log(albumId+"Deleted");
    }
}
module.exports=AlbumController;
