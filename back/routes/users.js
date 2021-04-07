const express = require('express')
const router = express.Router()

const userCtrl = require('../controllers/user');
const auth     = require('../middleware/auth');
const imgUploader = require('../helpers/image-uploader');

// Users routes
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/all',userCtrl.getAllUsers);
router.post('/:id', userCtrl.getUserProfile);
router.put('/:id', auth,imgUploader.upload.single('image'), userCtrl.editUserProfile);

module.exports = router