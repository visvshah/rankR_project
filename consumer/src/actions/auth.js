import * as api from '../api';

export const signin = (userData, history) => async(dispatch) =>{
    try {
        const {data} = await api.signin(userData);
        dispatch({type: "AUTH", data});
        history.push("/");
    } catch (error) {
        console.log(error);
    }
}
export const signup = (userData, history) => async(dispatch) =>{
    try {
        const {data} = await api.signup(userData);
        console.log(`Data: ${data}`);
        console.log("2.) Actions/auth.js");
        dispatch({type: "AUTH", data});
        history.push("/");
    } catch (error) {
        console.log(error);
    }
}

