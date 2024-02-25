const requirementsModel = require("../models/requirements.model");
const asyncErrorHandler = require("../utils/asyncErrorHandler");

const getRequirements = asyncErrorHandler(async (req, res) => {
  const data = await requirementsModel.find({});
  res.render("requirement", { data });
});

module.exports = { getRequirements };
