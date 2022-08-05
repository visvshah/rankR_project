import * as api from '../api';

export const signin = (userData, history) => async(dispatch) =>{
    try {
        history.push("/")
    } catch (error) {
        console.log.apply(error)
    }
}
export const signup = (userData, history) => async(dispatch) =>{
    try {
        history.push("/")
    } catch (error) {
        console.log.apply(error)
    }
}

