var mongoose = require('mongoose');

// User Schema
var RegisSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  phone:{
    type: Number,
    required: true
  },
  city:{
    type: String,
    required: true
  },
  place: {
    type: String,
    required: true
  }
});

var Register = module.exports = mongoose.model('Register', RegisSchema);
