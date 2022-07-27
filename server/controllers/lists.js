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
export const createList = (request, response) => {
    response.send('Post Created');
}