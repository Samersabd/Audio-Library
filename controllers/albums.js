const Albums =require('../models/album');

exports.getAddAlbum =(req, res ,next)=>{
    res.render('add-album',{
        pageTitle: 'Add Album',
        path: 'add-Album',
        editing:false
    });
};

exports.postAddAlbum = (req, res, next) =>{
    const name=req.body.name;
    const description =req.body.description;
    const showNbTracks =req.body.showNbTracks;
    const createdAt= new Date();
    const updatedAt= '';
    const lastSongAddedAt='';
    const album = new Album({
        name:name,
        description:description,
        showNbTracks:showNbTracks,
        createdAt:createdAt,
        updatedAt:updatedAt,
        lastSongAddedAt:lastSongAddedAt
    });
    album
    .save()
    .then(result =>{
        console.log('created Album');
        res.redirect('/');
    })
    .catch(err =>{

    })
}
