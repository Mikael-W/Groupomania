const express = require('express')
const router = express.Router()

const publicationsCtrl = require('../controllers/publications')
const commentsCtrl = require('../controllers/comments')
const checkAuth        = require('../middleware/auth')

// Users routes
router.post('/',publicationsCtrl.createPublication);
router.get('/',publicationsCtrl.getAllPublication);
router.get('/:id',publicationsCtrl.getOnePublication);
router.patch('/:id', publicationsCtrl.updatePublication);
router.delete('/:id', publicationsCtrl.destroyPublication);

router.post('/:publicationId/comments', commentsCtrl.createComment);
router.get('/:publicationId/comments', commentsCtrl.getAllComment);
router.get('/:publicationId/comments/:id', commentsCtrl.getOneComment);
router.patch('/:publicationId/comments/:id', commentsCtrl.updateComment);
//router.delete('/:publicationId/comments/:id', commentsCtrl.destroyComment);

module.exports = router