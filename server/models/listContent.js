import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    content: [String],
    author: String,
    tags: [String],
    thumbs: {
        type: Number,
        default: 0
    },
    timeStamp: {
        type: Date,
        default: new Date()
    }
})

const listContent = mongoose.model('ListContent', postSchema);

export default listContent;