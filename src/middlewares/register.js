const multer = require('multer');
const storage = require('../modules/storage');
const register = require('../validation/register');
const upload = multer({storage: storage('avatar')});

module.exports = [upload.any(), register.any]