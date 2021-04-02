const express = require('express')
const router = express.Router()

const publicationsCtrl = require('../controllers/publications')
const commentsCtrl     = require('../controllers/comments')
const auth        = require('../middleware/auth')
const multer        = require('../middleware/multer-config');

// Publications routes
router.post('/', auth, multer, publicationsCtrl.createPublication);
router.get('/', auth, publicationsCtrl.getAllPublication);
router.get('/:id', auth, publicationsCtrl.getOnePublication);
router.patch('/:id', auth, multer, publicationsCtrl.updatePublication);
router.delete('/:id', auth, publicationsCtrl.destroyPublication);

router.post('/:publicationId/comments', commentsCtrl.createComment);
router.get('/:publicationId/comments', commentsCtrl.getAllComment);
router.get('/:publicationId/comments/:id', commentsCtrl.getOneComment);
router.patch('/:publicationId/comments/:id', commentsCtrl.updateComment);
router.delete('/:publicationId/comments/:id', commentsCtrl.destroyComment);

module.exports = router