const express            = require('express');
const app                = express();
const path               = require('path')
const publicationsRoutes = require('./routes/publications')
const usersRoutes = require('./routes/users')

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    next()
  })

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/images', express.static(path.join(__dirname, 'images')))

app.use('/api/publications', publicationsRoutes)
app.use('/api/users', usersRoutes)

module.exports = app;