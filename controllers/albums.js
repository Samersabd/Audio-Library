const Albums =require('../models/album');

exports.getAlbums=(req, res, next)=>{
    Albums.fetchAll()
    .then()
    .catch()
}