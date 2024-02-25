require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const { mainRoutes } = require("./routes/main.routes")

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "./views"))
app.use("/", mainRoutes)

app.all("*", (req, res) => {
    res.render("pages/404")
})

app.use((err, req, res, next) => {
    res.status(500).json("Internal Server Error" + err.message)
})

module.exports = { app }
