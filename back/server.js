// Imports
const express     = require('express');
const app  = require('./app');

// Instantiate server
const server = express();

// Body Parser configuration
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

// Configure routes
server.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<h1>Bonjour sur mon super server</h1>');
});

server.use('/api', app);

// Launch server
server.listen(3000, function() {
    console.log('Server en écoute :)');
});