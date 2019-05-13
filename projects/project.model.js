const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
    title: String,
    shortdescription: String,
    tilecolor: String,
    clientlogo: String, 
    coverimage: String,
    heroimage: String,
    linktoproject: String,
    photo: {
      photo1: String,
      photo2: String,
      photo3: String,
      photo4: String,
      photo5: String,
      photo6: String,
      photo7: String,
      photo8: String,
      photo9: String,
      photo10: String,
      photo11: String,
      photo12: String,
    } ,
    tech: Array,
});

module.exports = mongoose.model('Projects', ProjectSchema);