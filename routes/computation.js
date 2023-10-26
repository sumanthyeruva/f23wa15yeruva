var express = require('express');
var router = express.Router();
var x= Math.floor(Math.random());
var y=Math.floor(Math.random());
/* GET home page. */
router.get('/', function(req, res, next) {
var result1=Math.log2(x);
var result2=Math.cosh(y);
  res.send(`Math.log2() applied to[${x}]=${result1}<br>Math.cosh() applied to[${y}]=${result2}`);
});

module.exports = router;