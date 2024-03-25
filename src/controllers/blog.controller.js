const { BlogModel } = require("../models/blog.model")
const asyncErrorHandler = require("../utils/asyncErrorHandler")
const { imageUploader } = require("../utils/imageHandler")

const postBlog = asyncErrorHandler(async (req, res) => {
    const { title, content } = req.body
    if (!title || !content || !req.file)
        return res.status(400).json({
            message: "Please fill all fields",
            status: false,
        })
    const image = await imageUploader(req.file.path, "blog")

    await BlogModel.create({
        title,
        content,
        image: {
            imageUrl: image.secure_url,
            imageId: image.public_id,
        },
    })

    res.status(201).json({
        message: "Blog created successfully",
        status: true,
    })
})

const renderBlog = asyncErrorHandler(async (req, res) => {
    res.render("blog", {
        data: null,
    })
})

const getBlogs = asyncErrorHandler(async (req, res) => {
    const blogs = await BlogModel.find()

    if (!blogs.length)
        return res.status(404).json({
            message: "No blogs found",
            status: false,
        })

    res.status(200).json({
        message: "Blogs fetched successfully",
        status: true,
        data: blogs,
    })
})

module.exports = {
    postBlog,
    renderBlog,
    getBlogs,
}
