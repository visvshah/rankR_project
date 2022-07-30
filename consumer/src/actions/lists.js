import * as api from '../api'
export const getLists = () => async(dispatch) =>{
    try {
        const {data} = await api.fetchLists();
        dispatch({ type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message);
    }
    
}
export const createList = (list) => async (dispatch) =>{
    try {
        const {data} = await api.createList(list);
        dispatch({type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}