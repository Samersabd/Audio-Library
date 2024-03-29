const track =require('../models/Tracks');
const Album_Controller=require('./albums');
const albumController=Album_Controller;

const CategoryController=require('./category');
const categoryController=new CategoryController;
class TrackController{
    async addTrack(albumId,trackObject){
        const foundAlbum=await albumController.getAlbumById(albumId);
        await categoryController.getCategoryById(trackObject.categoryId);
        const foundTrack=await track.findOne({
            name:trackObject.name,
        }
        );
        if(foundTrack){
            console.log('the song already exists');
            // const error =new Error("the category already exists");
            // error.statusCode = statusCode.conflict;
            // throw error;
        }else{
            const song = new track({
                name:trackObject.name,
                singer:trackObject.singer,
                categoryId:trackObject.categoryId,
                albumId: albumId,
                
            });
        
        console.log('track', song._id);
        await song.save();
        foundAlbum.lastSongAddedAt=Date();
        return song;
        }
    }
    async deleteTrack(trackId){
        await track.deleteOne({_id:trackId});
        console.log(trackId+"Deleted");
    }

    async getTrackByAlbumId(albumId){
        const foundTrack=await track.findOne({albumId:albumId});
        if(!foundTrack){
            return false;
        }else{
            return true;
        }
    }

}

module.exports=TrackController;