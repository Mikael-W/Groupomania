const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth')
const commentsCtrl = require('../controllers/sauces')
const multer = require('../middleware/multer-config')

router.get('/', auth, commentsCtrl.getAllComments)
router.post('/', auth, multer, commentsCtrl.createComment)
router.put('/:id', auth, multer, commentsCtrl.modifyComment)
router.delete('/:id', auth, commentsCtrl.deleteComment)
router.get('/:id', auth, commentsCtrl.getOneSauce)

module.exports = router