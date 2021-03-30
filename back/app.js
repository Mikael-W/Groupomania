const express = require('express');
const app = express();
const publicationsRoutes = require('./routes/publications')
const usersRoutes = require('./routes/users')
const path        = require('path')
//const imageRoute = require('./routes/images');


app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/uploads', express.static(path.join(__dirname,'uploads')));


app.use('/publications', publicationsRoutes)
app.use('/users', usersRoutes)


module.exports = app;