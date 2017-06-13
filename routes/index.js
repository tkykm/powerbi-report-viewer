var express = require('express');
var router = express.Router();
const config = require('../lib/config')
const powerbi = require('../lib/powerbi')

/* GET home page. */
router.get('/', function(req, res, next) {
  let token = powerbi();
  res.render('index', { title: 'multi cloud課金モニタリング', token: token, url: config.reporturl});
});

module.exports = router;
