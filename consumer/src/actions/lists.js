import * as api from '../api'
export const getLists = () => async(dispatch) =>{
    try {
        const {data} = await api.fetchLists();
        dispatch({ type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error);
    }
    
}
export const createList = (list) => async (dispatch) =>{
    try {
        const {data} = await api.createList(list);
        dispatch({type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const deleteList = (id) => async (dispatch) =>{
    try {
        await api.deleteList(id);
        dispatch({type: 'DELETE', payload: id})
    } catch (error) {
        console.log(error);
    }
}

export const updateList = (id, list) => async (dispatch) =>{
    try {
        const {data} = await api.updateList(id, list);
        dispatch({type: 'UPDATE', payload: data});
    } catch (error) {
        console.log(error);
    }
}