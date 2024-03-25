const { BlogModel } = require("../models/blog.model")
const asyncErrorHandler = require("../utils/asyncErrorHandler")
const { imageUploader } = require("../utils/imageHandler")
const mongoose = require("mongoose")

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

    res.redirect("/posts")
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

const deletePost = asyncErrorHandler(async (req, res) => {
    const { id } = req.query
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: "Please provide the valid post id",
            status: false,
        })
    }

    const result = await BlogModel.findByIdAndDelete(id)

    if (result === null) {
        return res.status(StatusCodes.NOT_FOUND).json({
            message: "Post not found",
            status: false,
        })
    }

    const image_delete_response = await imageRemover(result.imageId)

    if (image_delete_response.result !== "ok") {
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: "There is an error while removing image",
            status: false,
        })
    }

    res.status(StatusCodes.OK).json({
        message: "Post deleted successfully",
        status: true,
    })
})

module.exports = {
    postBlog,
    renderBlog,
    getBlogs,
    deletePost,
}
