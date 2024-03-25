const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        content: {
            type: String,
            required: true,
            trim: true,
        },
        image: {
            imageUrl: {
                type: String,
                required: true,
            },
            imageId: {
                type: String,
                required: true,
            },
        },
    },
    { timestamps: true }
)

const BlogModel = mongoose.model("blog", blogSchema)

module.exports = { BlogModel }
