const path = require('path');
const Category = require('./models/category');
const Album = require('./models/album');
const Tracks = require('./models/Tracks');

const Categorycont = require('./controllers/category');

const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');
// const errorController =require('./controllers/error');


const mongoConnect =require('./util/database').mongoConnect;

const app =express();


function testCase() {
    const createdAt= new Date();
    const updatedAt= '';
    const Cat1=new Category('POP','POP Music',createdAt,updatedAt);
    let cat1Id = '';
    let cat2Id = '';
    let alb1Id = '';
    let alb2Id = '';
    Cat1.save()
    .then(result =>{
        //console.log(result);
        cat1Id=result;
        console.log(cat1Id);
    })
    .catch(err =>{
        console.log(err);
    });
    const Cat2=new Category('Jazz','Jazz Music',createdAt,updatedAt);
    Cat2.save()
    .then(result =>{
        //console.log(result);
        cat2Id=result;
        console.log(cat2Id);
    })
    .catch(err =>{
        console.log(err);
    });
    album1=new Album('My Album','My own album',0,createdAt,updatedAt,createdAt);
    album1.save()
    .then(result =>{
        console.log(result);
    })
    .catch(err =>{
        console.log(err);
    });

    mytrack1=new Tracks('hello','Adel',cat1Id,alb1Id);
    mytrack1.save()
    .then(result =>{
        console.log(result);
    })
    .catch(err =>{
        console.log(err);
    });
    mytrack2=new Tracks('hello','Adel',cat1Id,alb1Id);
    mytrack2.save()
    .then(result =>{
        console.log(result);
    })
    .catch(err =>{
        console.log(err);
    });
    mytrack3=new Tracks('hello','Adel',cat1Id,alb1Id);
    mytrack3.save()
    .then(result =>{
        console.log(result);
    })
    .catch(err =>{
        console.log(err);
    });



    album2=new Album('Temp Album','My Temp Album',0,createdAt,updatedAt,createdAt);
    album2.save()
    .then(result =>{
        console.log(result);
    })
    .catch(err =>{
        console.log(err);
    });



    temptrack1=new Tracks('hello','Adel',cat2Id,alb2Id);
    temptrack1.save()
    .then(result =>{
        console.log(result);
    })
    .catch(err =>{
        console.log(err);
    });
    temptrack2=new Tracks('hello','Adel',cat2Id,alb2Id);
    temptrack2.save()
    .then(result =>{
        console.log(result);
    })
    .catch(err =>{
        console.log(err);
    });
    temptrack3=new Tracks('hello','Adel',this.cat2Id,alb2Id);
    temptrack3.save()
    .then(result =>{
        console.log(result);
    })
    .catch(err =>{
        console.log(err);
    });







};


// const adminRoutes = require('./routes/admin');
// const libraryRoutes = require('./routes/library');
// app.set('view engine', 'ejs');
// app.set('views', 'views');

app.use(testCase);

// app.use(bodyParser.urlencoded({extended:false}));

// app.use((req,res,next)=>{
//     next();
// });

// app.use(adminRoutes);
// app.use(libraryRoutes);



mongoConnect((client)=>{
    app.listen(3000);
});