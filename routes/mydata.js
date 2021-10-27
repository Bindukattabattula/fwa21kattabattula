var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Bindu Shiva Sri SaiLakshmi Kattabattula' });
});

module.exports = router;
