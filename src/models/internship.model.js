const mongoose = require("mongoose");

const internshipModel = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date_of_birth: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  zip_code: {
    type: Number,
    required: true,
  },
  institution: {
    type: String,
    required: true,
  },
  screenshot: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model("internship", internshipModel);
