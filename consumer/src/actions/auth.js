import * as api from '../api';

export const signin = (userData, history) => async(dispatch) =>{
    try {
        const {data} = await api.signin(userData);
        dispatch({type: "AUTH", data});
        history.push("/")
    } catch (error) {
        console.log.apply(error)
    }
}
export const signup = (userData, history) => async(dispatch) =>{
    try {
        const {data} = await api.signup(userData);
        dispatch({type: "AUTH", data});
        history.push("/")
    } catch (error) {
        console.log.apply(error)
    }
}

