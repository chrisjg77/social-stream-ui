var express = require('express');
var router = express.Router();
var conf = require('./../conf')();

/* GET home page. */
router.get(['/','/login','/user'], function(req, res) {
  res.render('index',{'conf':conf});
});

module.exports = router;
