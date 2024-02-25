const mongoose = require("mongoose");

const requirementModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  site_details: {
    type: String,
    required: true,
  },
  area: {
    type: Number,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  services: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model("requirements", requirementModel);
