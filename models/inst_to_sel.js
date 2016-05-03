var mongoose = require('mongoose');

var instructorselectSchema = new mongoose.Schema({
  name: { type: String, required: true},
          location: String,
          skills: String,
          email: String
});

var instructor_sel = mongoose.model('instructorsel', instructorselectSchema);









module.exports = instructor_sel;
