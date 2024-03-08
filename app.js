const Categorycont = require('./controllers/category');
const categorycont =new Categorycont;
const Albumcont = require('./controllers/albums');
const albumcont =new Albumcont;

const Trackcontroller=require('./controllers/Tracks');
const trackController=new Trackcontroller;

const express = require('express');
const mongoose =require('mongoose');
// const errorController =require('./controllers/error');

const app =express();

async function testCase(){
    try{
        console.log('in test');
        const popCategory =await categorycont.addCategory({
            name:'Pop',
            description:"pop songs",
        });
        const jazzCategory =await categorycont.addCategory({
            name:'Jazz',
            description:"Jazz songs",
        });
        const myalbum =await albumcont.addAlbum({
            name:'my Album',
            description:"my own Album",
        });
        await trackController.addTrack(myalbum._id,{
            name:"Hello",
            singer:"Adele",
            categoryId:popCategory._id,
            
        });
        await trackController.addTrack(myalbum._id,{
            name:"Thunder",
            singer:"ACDC",
            categoryId:popCategory._id,
            
        });
        const myAlbumtrack3=await trackController.addTrack(myalbum._id,{
            name:"OK",
            singer:"Imagine Dragons",
            categoryId:popCategory._id,
            
        });
        const Tempalbum =await albumcont.addAlbum({
            name:'Temp Album',
            description:"my Temp Album",
        });

        await trackController.addTrack(Tempalbum._id,{
            name:"bad habits",
            singer:"Ed Sheeran",
            categoryId:jazzCategory._id,
            
        });
        await trackController.addTrack(Tempalbum._id,{
            name:"Dirge for Planet",
            singer:"Firelake",
            categoryId:jazzCategory._id,
            
        });
        const myTemptrack3=await trackController.addTrack(Tempalbum._id,{
            name:"Running out of Roses",
            singer:"Alan Walker",
            categoryId:jazzCategory._id,
            
        });
        await albumcont.deleteAlbum(Tempalbum._id);
        await trackController.deleteTrack(myAlbumtrack3._id);
    }catch(err){
        throw err;
    }
}

app.use(testCase);


const adminRoutes = require('./routes/admin');
const libraryRoutes = require('./routes/library');
const AlbumController = require('./controllers/albums');
// app.set('view engine', 'ejs');
// app.set('views', 'views');



// app.use(bodyParser.urlencoded({extended:false}));

// app.use((req,res,next)=>{
//     next();
// });

app.use(adminRoutes);
app.use(libraryRoutes);



mongoose.connect('mongodb+srv://samerabdallah:XwipqeNW8s6nX4HX@cluster0.ldmvpxc.mongodb.net/audiolibrary?retryWrites=true&w=majority&appName=Cluster0')
.then(result =>{
app.listen(3000);
})
.catch(err =>{
    console.log(err);
});