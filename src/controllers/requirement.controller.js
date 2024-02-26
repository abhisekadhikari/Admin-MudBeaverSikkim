const mongoose = require("mongoose")
const requirementsModel = require("../models/requirements.model")
const asyncErrorHandler = require("../utils/asyncErrorHandler")

const getRequirements = asyncErrorHandler(async (req, res) => {
    const data = await requirementsModel.find({})
    res.render("requirement", { data })
})

const deleteRequirement = asyncErrorHandler(async (req, res) => {
    const { id } = req.params
    const checkId = mongoose.Types.ObjectId.isValid(id)
    if (!checkId)
        return res.status(400).json({
            message: "Invalid content id",
            status: false,
        })

    const delReq = await requirementsModel.findByIdAndDelete(id)
    if (delReq === null)
        return res.status(404).json({
            message: "Requirement post not found",
            status: false,
        })
    res.status(200).json({
        message: "Requirement post deleted successfully",
        status: true,
    })
})

module.exports = { getRequirements, deleteRequirement }
