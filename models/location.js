var mongoose = require('mongoose');

// Package Schema
var LocationSchema = mongoose.Schema({
  place:{
    type: String,
    required: true
  },
  idfiberstar:{
    type: String,
    required: true
  },
  city:{
    type: String,
    required: true
  }
});

var Location = module.exports = mongoose.model('Location', LocationSchema);