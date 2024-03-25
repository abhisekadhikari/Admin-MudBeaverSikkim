const multer = require("../config/multer.config")
const {
    renderBlog,
    postBlog,
    getBlogs,
} = require("../controllers/blog.controller")
const isLoggedIn = require("../middleware/isLoggedIn.middleware")

const blogRoute = require("express").Router()

blogRoute.route("/").get(renderBlog)

blogRoute.route("/").post(multer.single("image"), postBlog)

blogRoute.route("/all").get(getBlogs)

module.exports = { blogRoute }
