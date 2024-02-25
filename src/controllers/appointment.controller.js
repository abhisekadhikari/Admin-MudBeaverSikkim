const appointmentModel = require("../models/appointment.model");
const asyncErrorHandler = require("../utils/asyncErrorHandler");

const getAppoints = asyncErrorHandler(async (req, res) => {
  const data = await appointmentModel.find({});
  res.render("appointment", { data });
});

module.exports = {
  getAppoints,
};
