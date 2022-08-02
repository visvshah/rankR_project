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
    const newList = new listContent(list);
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
    if (!mongoose.Types.ObjectId.isValid(id)) return response.status(404).send(`No list with id: ${id}`);
    const list = await listContent.findById(id);
    const newList = await listContent.findByIdAndUpdate(id, {thumbs: list.thumbs + 1}, {new:true});
    response.json(newList);
};

