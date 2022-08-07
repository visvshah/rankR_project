import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    content: [String],
    name: String,
    author: String,
    tags: [String],
    thumbs: {
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