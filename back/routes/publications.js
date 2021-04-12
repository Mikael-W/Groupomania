const express = require('express')
const router = express.Router()

const publicationsCtrl = require('../controllers/publications')
const commentsCtrl     = require('../controllers/comments')
//const auth             = require('../middleware/auth')
const multer = require('../helpers/image-uploader');


// Publications routes
router.post('/add',multer.uploadImage, publicationsCtrl.createPublication);
router.get('/all', publicationsCtrl.getAllPublication);
router.get('/:id', publicationsCtrl.getOnePublication);
router.patch('/:id', multer.uploadImage, publicationsCtrl.updatePublication);
router.delete('/:id', publicationsCtrl.destroyPublication);

router.post('/:publicationId/comments', commentsCtrl.createComment);
router.get('/:publicationId/comments', commentsCtrl.getAllComment);
router.get('/:publicationId/comments/:id', commentsCtrl.getOneComment);
router.patch('/:publicationId/comments/:id', commentsCtrl.updateComment);
router.delete('/:publicationId/comments/:id', commentsCtrl.destroyComment);

module.exports = router