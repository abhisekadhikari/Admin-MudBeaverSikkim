const { getAppoints } = require("../controllers/appointment.controller");

const appointmentRoutes = require("express").Router();

appointmentRoutes.route("/").get(getAppoints);

module.exports = { appointmentRoutes };
