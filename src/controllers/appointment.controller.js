const mongoose = require("mongoose")
const appointmentModel = require("../models/appointment.model")
const asyncErrorHandler = require("../utils/asyncErrorHandler")

const getAppoints = asyncErrorHandler(async (req, res) => {
    const data = await appointmentModel.find({})
    res.render("appointment", { data })
})

const deleteAppointment = asyncErrorHandler(async (req, res) => {
    const { id } = req.params
    const checkId = mongoose.Types.ObjectId.isValid(id)
    if (!checkId)
        return res.status(400).json({
            message: "Invalid content id",
            status: false,
        })

    const delAppoint = await appointmentModel.findByIdAndDelete(id)
    if (delAppoint === null)
        return res.status(404).json({
            message: "Appointment not found",
            status: false,
        })
    res.status(200).json({
        message: "Appointment deleted successfully",
        status: true,
    })
})

module.exports = {
    getAppoints,
    deleteAppointment,
}
