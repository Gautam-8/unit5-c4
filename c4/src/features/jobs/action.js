import { ADD_JOB, APPLY_JOB, LOGIN_ERROR, LOGIN_SUCCESS } from "./actionTypes"
import axios from "axios"

export const addJob = (data) => {
    return{
        type : ADD_JOB,
        payload : data
    }
}

export const applyJob = (data) => {
    return{
        type : APPLY_JOB,
        payload : data
    }
}

export const addJobtodb = (form) => (dispatch) => {

    dispatch(addJob(form))
    axios.post('http://localhost:3001/jobs' , form)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))


}


export const loginSuccess = (data) => {
    return {
        type:LOGIN_SUCCESS,
        payload:data
    }
}

export const loginError = (err) => {
    return {
        type:LOGIN_ERROR,
        payload:err
    }
}
