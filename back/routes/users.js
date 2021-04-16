const express = require('express')
const router = express.Router()

const userCtrl = require('../controllers/user');
const auth     = require('../middleware/auth');
const multer = require('../helpers/image-uploader');

// Users routes
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/all',userCtrl.getAllUsers);
router.get('/:id', userCtrl.getUserProfile);
router.put('/:id',multer.uploadImage, userCtrl.editUserProfile);
router.put('/:id/overlay',multer.uploadOverlay, userCtrl.editUserOverlay);

module.exports = router