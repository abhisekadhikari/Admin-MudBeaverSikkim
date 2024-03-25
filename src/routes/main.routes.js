const mainRoutes = require("express").Router()
const { dashboardRoutes } = require("./dashboard.routes")
const { contactRoutes } = require("./contact.routes")
const { requirementRoute } = require("./requirement.routes")
const { appointmentRoutes } = require("./appointment.routes")
const { signinRoutes } = require("./signin.routes")
const checkAuth = require("../middleware/checkAuth.middleware")
const isLoggedIn = require("../middleware/isLoggedIn.middleware")
const { blogRoute } = require("./blog.routes")

mainRoutes.use("/auth", checkAuth, signinRoutes)

mainRoutes.use("/contact", isLoggedIn, contactRoutes)

mainRoutes.use("/requirements", isLoggedIn, requirementRoute)

mainRoutes.use("/appointments", isLoggedIn, appointmentRoutes)

mainRoutes.use("/blog", blogRoute)

mainRoutes.use("/", isLoggedIn, dashboardRoutes)

mainRoutes.route("/logout").get((req, res) => {
    req.logout((err) => {
        if (err) return next(err)
        res.redirect("/")
    })
})

module.exports = { mainRoutes }
