var express = require('express');
const adminController = require("../controllers/adminController.js");
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
const jsonParser = express.json();

router.get('/', adminController.getArticleAll);
router.get('/:idArticle', adminController.getArticle);
router.get('/addArticle', adminController.addArticle);
router.get('/editArticle', adminController.editArticle);
router.get('/deleteArticle', adminController.deleteArticle);

module.exports = router;