var express = require('express');
var each = require('foreach');
var router = express.Router();
var Village = require('../models/villages');
var Streets = require('../models/streets');
var NoStreets = require('../models/nostreets');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
