var express = require('express');
var router = express.Router();
var Register = require('../models/register');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nusanet Jakarta' });
});

/* GET home page. */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});

/* GET home page. */
router.get('/listregister', function(req, res, next) {
  Register.find(function(err, registers) {
       console.log( registers );
       res.json(registers);
   });
});


// Add Submit POST Route
router.post('/register', function(req, res){
  req.checkBody('name','Name is required').notEmpty();
  req.checkBody('email','Email is required').notEmpty();
  req.checkBody('phone','Phone is required').notEmpty();
  req.checkBody('city','City is required').notEmpty();
  req.checkBody('place','Place is required').notEmpty();

  // Get Errors
  let errors = req.validationErrors();
  
  if(errors){
    res.render('register', {
      title:'register',
      errors:errors
    });
  } else {
    let register = new Register();
    register.name = req.body.name;
    register.email = req.body.email;
    register.phone = req.body.phone;
    register.city = req.body.city;
    register.place = req.body.place;
    
    register.save(function(err){
      if(err){
        console.log(err);
        return;
      } else {
        req.flash('success','Article Added');
        res.redirect('/register');
      }
    });
  }
});

module.exports = router;
