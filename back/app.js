const express            = require('express');
const app                = express();
const publicationsRoutes = require('./routes/publications')
const usersRoutes = require('./routes/users')
const path        = require('path')

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    next()
  })

app.use(express.urlencoded({ extended: true }))
app.use(express.json())



app.use('/uploads', express.static(path.join(__dirname,'uploads')));


app.use('/api/publications', publicationsRoutes)
app.use('/api/users', usersRoutes)


module.exports = app;