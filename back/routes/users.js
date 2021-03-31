const express = require('express')
const router = express.Router()

const userCtrl = require('../controllers/user');
//const checkAuth     = require('../middleware/auth');
const multer = require('../middleware/multer-config')

// Users routes
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
//router.patch('/edit', multer, userCtrl.updateProfile);

module.exports = router