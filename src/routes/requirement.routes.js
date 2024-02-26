const {
    getRequirements,
    deleteRequirement,
} = require("../controllers/requirement.controller")

const requirementRoute = require("express").Router()

requirementRoute.route("/").get(getRequirements)

requirementRoute.route("/:id").delete(deleteRequirement)

module.exports = { requirementRoute }
