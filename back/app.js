const express = require('express');
const app = express();
const publicationsRoutes = require('./routes/publications')
const usersRoutes = require('./routes/users')


app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use('/publications', publicationsRoutes)
app.use('/users', usersRoutes)

module.exports = app;