import listContent from '../models/listContent.js';
import mongoose from 'mongoose';

export const getLists = async (request, response) => {
    try {
        const listContents = await listContent.find();
        response.status(200).json(listContents);
    } catch (error) {
        response.status(404).json({message: error.message})
    }
}
export const createList = async (request, response) => {
    const list = request.body;
    const newList = new listContent({...list, creator: request.userId, timeStamp: new Date().toISOString()});
    try {
        await newList.save();
        response.status(201).json(newList);
    } catch (error) {
        response.statis(409).json({message: error.message})
    }
}
export const deleteList = async (request, response) => {
    const {id}= request.params
    if (!mongoose.Types.ObjectId.isValid(id)) return response.status(404).send(`No list with id: ${id}`);
    await listContent.findByIdAndRemove(id);
    response.json({ message: "List deleted!" });
}

export const updateList = async (request, response) => {
    const {id: _id}= request.params;
    const list = request.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) return response.status(404).send(`No list with id: ${_id}`);
    const newList = await listContent.findByIdAndUpdate(_id, {...list, _id}, {new:true});
    response.json(newList);
};

export const likeList = async (request, response) => {
    const {id}= request.params;
    if(!request.userId) return response.json({message: "Log in first!"});

    if (!mongoose.Types.ObjectId.isValid(id)) return response.status(404).send(`No list with id: ${id}`);
    const list = await listContent.findById(id);

    const like = list.thumbs.findIndex((id) => id === String(request.userId));
    if(like === -1){
        list.thumbs.push(request.userId);
    }
    else{
        list.thumbs = list.thumbs.filter((id)=> id !== String(request.userId));
    }
    const newList = await listContent.findByIdAndUpdate(id, list, {new:true});
    response.json(newList);
};

export const dislikeList = async (request, response) => {
    const {id}= request.params;
    if(!request.userId) return response.json({message: "Log in first!"});
    console.log("reached controller");
    if (!mongoose.Types.ObjectId.isValid(id)) return response.status(404).send(`No list with id: ${id}`);
    const list = await listContent.findById(id);

    const dislike = list.thumbsDown.findIndex((id) => id === String(request.userId));
    if(dislike === -1){
        list.thumbsDown.push(request.userId);
    }
    else{
        list.thumbsDown = list.thumbsDown.filter((id)=> id !== String(request.userId));
    }
    const newList = await listContent.findByIdAndUpdate(id, list, {new:true});
    response.json(newList);
};