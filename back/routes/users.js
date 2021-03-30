const express = require('express')
const router = express.Router()

const userCtrl = require('../controllers/user');
//const checkAuth     = require('../middleware/auth');
const imagesCtrl          = require('../middleware/multer-config')

// Users routes
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.patch('/edit', imagesCtrl.multerUpload, userCtrl.updateProfile);

module.exports = router