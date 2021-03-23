const express = require('express')
const router = express.Router()

const userCtrl = require('../controllers/user')
const passwordValidation = require('../middleware/passwordValidation')

router.post('/signup', passwordValidation, userCtrl.signup)
router.post('/login', userCtrl.login)

module.exports = router