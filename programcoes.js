let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let urlencodeParser = bodyParser.urlencoded({extended: false});
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');


const adminController = require("../controllers/adminController.js");
var router = express.Router();


const jsonParser = express.json();

router.get('/', adminController.getArticleAll);
router.get('/:idArticle', adminController.getArticle);
router.get('/:addArticle', adminController.addArticle);
router.get('/:editArticle', adminController.editArticle);
router.get('/:deleteArticle', adminController.deleteArticle);

module.exports = router;
