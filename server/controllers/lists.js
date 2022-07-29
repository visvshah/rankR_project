import ListContent from '../models/listContent.js'
export const getLists = async (request, response) => {
    try {
        const listContents = await ListContent.find();
        console.log(listContents);
        response.status(200).json(listContents);
    } catch (error) {
        response.status(404).json({message: error.message})
    }
}
export const createList = async (request, response) => {
    const list = request.body;
    const newList = new ListContent(list);
    try {
        await newList.save();
        response.status(201).json(newList);
    } catch (error) {
        response.statis(409).json({message: error.message})
    }
}