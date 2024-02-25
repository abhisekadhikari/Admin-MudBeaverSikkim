const asyncErrorHandler = require("../utils/asyncErrorHandler");
const contactModel = require("../models/contact.model");
const servicesModel = require("../models/services.model");
const requimentsModel = require("../models/requirements.model");
const internshipModel = require("../models/internship.model");
const appointmentModel = require("../models/appointment.model");

const dashboardController = asyncErrorHandler(async (req, res) => {
  const conatct = await contactModel.aggregate([
    {
      $count: "contacts",
    },
  ]);
  const service = await servicesModel.aggregate([
    {
      $count: "services",
    },
  ]);
  const requirement = await requimentsModel.aggregate([
    {
      $count: "requirements",
    },
  ]);
  const internship = await internshipModel.aggregate([
    {
      $count: "internships",
    },
  ]);
  const appointment = await appointmentModel.aggregate([
    {
      $count: "appointments",
    },
  ]);
  res.render("index", {
    conatct: conatct[0]?.contacts == null ? 0 : conatct[0]?.contacts,
    requirement:
      requirement[0]?.requirements == undefined || null
        ? 0
        : requirement[0]?.requirements,
    service: service[0]?.services == null ? 0 : service[0]?.services,
    internship:
      internship[0]?.internships == null ? 0 : internship[0]?.internships,
    appointment:
      appointment[0]?.appointments == null ? 0 : appointment[0]?.appointments,
  });
});

module.exports = { dashboardController };
