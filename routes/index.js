var express = require('express');
var router = express.Router();

var multer = require('multer');
var memoryStorage = multer.memoryStorage();

var uploader = require('../uploader')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/disk-storage', function(req, res) {
    
});

router.post('/memory-storage', multer({ storage: memoryStorage }).single('file'), function(req, res) {
    uploader.inMemory(JSON.parse(req.file.buffer));
    res.render('index', { title: 'Express' });
});

router.post('/dropbox-storage', function(req, res) {
    
});

module.exports = router;
