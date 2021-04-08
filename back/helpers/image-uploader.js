const multer = require('multer');
const path  = require('path');


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './images')
    },
    filename : function(req, file, cb){
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png' ){
        cb(null, true)
    }else{
        cb(new Error('Unsupportable File'), false);
    }
}

const upload = multer({
    storage : storage,
    fileFilter : fileFilter
});

module.exports = {
    upload: upload
}

