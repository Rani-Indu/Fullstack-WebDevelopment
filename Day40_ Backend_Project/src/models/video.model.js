import mongoose from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"

const videoSchema = new mongoose.Schema({
    videoFile: {
        type: String, // cloudinary url
        required: true
    },
    thumbnail: {
        type: String, // cloudinary url
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,  // from cloudinary 
        // cloudinary jaise hi koi file upload kar leta hai uske baad ush file ki information bhejta hai like - url , duration of video, etc
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    isPublished: { // whether video is publically available or not 
        type: Boolean,
        default: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },


}, 
{
    timestamps: true
}
)

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)

// https://www.npmjs.com/package/mongoose-aggregate-paginate-v2