import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    content: [String],
    name: String,
    author: String,
    creator: String,
    thumbs: {
        type: [String],
        default: [],
    },
    thumbsDown: {
        type: [String],
        default: [],
    },
    timeStamp: {
        type: Date,
        default: new Date(),
    }
})

const listContent = mongoose.model('ListContent', postSchema);

export default listContent;