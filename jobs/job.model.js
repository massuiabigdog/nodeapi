const mongoose = require('mongoose');

const JobSchema = mongoose.Schema({
  companylogo: String,
  companyname: String,
  work: String, 
  period: String,
  responsabilities: String,
  companyweb: String,
});

module.exports = mongoose.model('Jobs', JobSchema);