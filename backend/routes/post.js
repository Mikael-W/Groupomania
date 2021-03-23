const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth')
const postsCtrl = require('../controllers/posts')
const multer = require('../middleware/multer-config')

router.get('/', auth, postsCtrl.getAllPosts)
router.post('/', auth, multer, postsCtrl.createPost)
router.put('/:id', auth, multer, postsCtrl.modifyPost)
router.delete('/:id', auth, postsCtrl.deletePost)
router.get('/:id', auth, postsCtrl.getOnePost)
router.post('/:id/like', auth, postsCtrl.likePost)

module.exports = router