const { signinHandler } = require("../controllers/signin.controller")

const signinRoutes = require("express").Router()

signinRoutes.route("/").get(signinHandler)

module.exports = { signinRoutes }
