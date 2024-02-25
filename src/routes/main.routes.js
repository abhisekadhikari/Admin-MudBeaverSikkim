const mainRoutes = require("express").Router()
const { dashboardRoutes } = require("./dashboard.routes")
const { contactRoutes } = require("./contact.routes")
const { requirementRoute } = require("./requirement.routes")
const { appointmentRoutes } = require("./appointment.routes")
const { signinRoutes } = require("./signin.routes")

mainRoutes.use("/signin", signinRoutes)

mainRoutes.use("/", dashboardRoutes)

mainRoutes.use("/contact", contactRoutes)

mainRoutes.use("/requirements", requirementRoute)

mainRoutes.use("/appointments", appointmentRoutes)

module.exports = { mainRoutes }
