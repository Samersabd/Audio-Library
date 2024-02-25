const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
// const errorController =require('./controllers/error');


const mongoConnect =require('./util/database').mongoConnect;

const app =express();

const adminRoutes = require('./routes/admin');
const libraryRoutes = require('./routes/library');
// app.set('view engine', 'ejs');
// app.set('views', 'views');

app.use(bodyParser.urlencoded({extended:false}));

app.use(adminRoutes);
app.use(libraryRoutes);



mongoConnect((client)=>{
    app.listen(3000);
});