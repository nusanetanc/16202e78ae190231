var express = require('express');
var router = express.Router();
var Location = require('../models/location');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET location listing. */
router.get('/city/:city', function(req, res, next) {
    Location.findOne({city: req.params.city}, function(err, locations) {
       console.log( locations );
       res.json(locations);
   });
});

// Add Submit POST Route
router.post('/add', function(req, res){
  req.checkBody('city','City is required').notEmpty();
  req.checkBody('place','Place is required').notEmpty();
  req.checkBody('idfiberstar','Idfiberstar is required').notEmpty();;

  // Get Errors
  let errors = req.validationErrors();
  
  if(errors){
    res.render('index', {
      title:'Home',
      errors:errors
    });
  } else {
    let location = new Location();
    location.city = req.body.city;
    location.place = req.body.place;
    location.idfiberstar = req.body.idfiberstar;
    
    location.save(function(err){
      if(err){
        console.log(err);
        return;
      } else {
        req.flash('success','Article Added');
        //res.redirect('/a');
      }
    });
  }
});

module.exports = router;
