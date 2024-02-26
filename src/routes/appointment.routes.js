const {
    getAppoints,
    deleteAppointment,
} = require("../controllers/appointment.controller")

const appointmentRoutes = require("express").Router()

appointmentRoutes.route("/").get(getAppoints)

appointmentRoutes.route("/:id").delete(deleteAppointment)

module.exports = { appointmentRoutes }
