const express = require('express')
const router = express.Router()

const userCtrl = require('../controllers/user');

// Users routes
router.post('/signUp', userCtrl.signUp);
router.post('/login', userCtrl.login);
//router.get('/me',userCtrl.getUserProfile);
//router.put('/me',userCtrl.updateUserProfile);

module.exports = router