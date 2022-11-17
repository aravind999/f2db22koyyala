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
const Boxing = require('../models/Boxing');
var router = express.Router(); 
 
/* GET Boxings */ 
router.get('/', Boxing_controlers.Boxing_view_all_Page ); 
module.exports = router; 
/* GET detail Boxing page */ 
router.get('/detail', Boxing_controlers.Boxing_view_one_Page); 
/* GET create Boxing page */ 
router.get('/create', Boxing_controlers.Boxing_create_Page); 
/* GET create update page */ 
router.get('/update', Boxing_controlers.Boxing_update_Page); 
/* GET delete costume page */ 
router.get('/delete', Boxing_controlers.Boxing_delete_Page); 
 
 