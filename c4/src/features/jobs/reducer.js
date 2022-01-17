import { ADD_JOB, APPLY_JOB, LOGIN_ERROR, LOGIN_SUCCESS } from "./actionTypes"

const init = {jobs:{} , login:{} , auth:false , toggle:false}


export const reducer = (state = init , {type , payload}) => {

    switch(type){
        case ADD_JOB : 
        return {
            ...state,
            jobs : payload
        }
    

    case APPLY_JOB : 
    return {
    ...state,
    jobs : payload
    }

    case LOGIN_SUCCESS :
        return {
            ...state,
            auth : true,
            login : payload,
            toggle : state.toggle === false? true : false
        }

        case LOGIN_ERROR :
        return {
            ...state,
            auth : false,
           
        }



    default :
    return state;
}
}