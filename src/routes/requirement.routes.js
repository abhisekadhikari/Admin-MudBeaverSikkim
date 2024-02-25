const { getRequirements } = require("../controllers/requirement.controller");

const requirementRoute = require("express").Router();

requirementRoute.route("/").get(getRequirements);

module.exports = { requirementRoute };
