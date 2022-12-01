var express = require('express');
const Boxing_controlers=require('../controllers/Boxing');
var router = express.Router();
const secured = (req, res, next) => { 
  if (req.user){ 
    return next(); 
  } 
  req.session.returnTo = req.originalUrl; 
  res.redirect("/login"); 
}
/* GET Boxing */
router.get('/', Boxing_controlers.Boxing_view_all_Page );

/* GET detail machine page */
router.get('/detail', Boxing_controlers.Boxing_view_one_Page);
/* GET create machine page */
router.get('/create', secured, Boxing_controlers.Boxing_create_Page);
/* GET create update page */
// A little function to check if we have an authorized user and continue on or 
// redirect to login. 
/* GET update costume page */ 
router.get('/update', secured, Boxing_controlers.Boxing_update_Page); 
/* GET delete machine page */
router.get('/delete', secured, Boxing_controlers.Boxing_delete_Page);


module.exports = router;
 