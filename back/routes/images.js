const express = require('express');
const imageCtrl = require('../controllers/images');
const imgUploader = require('../helpers/image-uploader');
const auth        = require ('../middleware/auth');

const router = express.Router();

router.post('/upload', auth,imgUploader.upload.single('image'), imageCtrl.upload);

module.exports = router;