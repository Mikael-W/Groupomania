const express = require('express')
const router = express.Router()

const userCtrl = require('../controllers/user');
const auth     = require('../middleware/auth');
const multer= require('../middleware/multer-config')

// Users routes
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.post('/infos', userCtrl.getUserProfile);
router.patch('/edit', auth, multer, userCtrl.updateProfile);

module.exports = router