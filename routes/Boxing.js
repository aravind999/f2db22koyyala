//var express = require('express');
//const Boxing_controlers= require('../controllers/Boxing');
//var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
  //res.render('Boxing', { title: 'Search Results Boxing' });
//});
//router.get('/', Boxing_controlers.Boxing_view_all_Page );
//res.render('Boxing', { title: 'Search Results Boxing' });
//module.exports = router;
var express = require('express'); 
const Boxing_controlers= require('../controllers/Boxing'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', Boxing_controlers.Boxing_view_all_Page ); 
module.exports = router; 