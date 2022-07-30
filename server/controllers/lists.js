import listContent from '../models/listContent.js'
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