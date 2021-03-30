const express = require('express')
const router = express.Router()

const publicationsCtrl = require('../controllers/publications')
const commentsCtrl     = require('../controllers/comments')
const checkAuth        = require('../middleware/auth')
const imagesCtrl          = require('../middleware/multer-config')

// Publications routes
router.post('/', checkAuth.auth, imagesCtrl.multerUpload, publicationsCtrl.createPublication);
router.get('/', checkAuth.auth, publicationsCtrl.getAllPublication);
router.get('/:id', checkAuth.auth, publicationsCtrl.getOnePublication);
router.patch('/:id', checkAuth.auth, imagesCtrl.multerUpload, publicationsCtrl.updatePublication);
router.delete('/:id', checkAuth.auth, publicationsCtrl.destroyPublication);

router.post('/:publicationId/comments', commentsCtrl.createComment);
router.get('/:publicationId/comments', commentsCtrl.getAllComment);
router.get('/:publicationId/comments/:id', commentsCtrl.getOneComment);
router.patch('/:publicationId/comments/:id', commentsCtrl.updateComment);
router.delete('/:publicationId/comments/:id', commentsCtrl.destroyComment);

module.exports = router