var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Boxing', { title: 'Search Results Boxing' });
});

module.exports = router;