var express = require('express');
var router = express.Router();
var conf = require('./../conf')();

/* GET home page. */
router.get(['/','/login','/profile','/stream','/post/*'], function(req, res) {
  res.render('index',{'conf':conf, 'data':data});
});

module.exports = router;
