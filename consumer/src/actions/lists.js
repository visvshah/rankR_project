import * as api from '../api'
export const getLists = () => async(dispatch) =>{
    try {
        const {data} = await api.fetchLists();
        dispatch({ type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message);
    }
    
}