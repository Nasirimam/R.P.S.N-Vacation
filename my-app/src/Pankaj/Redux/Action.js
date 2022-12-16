import { LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT_SUCCESS, PROFILE_FAILURE, PROFILE_LOADING, PROFILE_SUCCESS, REGISTER_FAILURE, REGISTER_LOADING, REGISTER_SUCCESS } from "./ActionType"
import axios from "axios"

export const register=(payload)=>(dispatch)=>{
    dispatch({type:REGISTER_LOADING})
  console.log(payload)
   return axios.post(`https://masai-api-mocker.herokuapp.com/auth/register`,payload).then((r)=>{
        dispatch({type:REGISTER_SUCCESS,payload:r.data});
        console.log("Reg Success")
        return REGISTER_SUCCESS
    })
    .catch((e)=>{
        dispatch({type:REGISTER_FAILURE,payload:e});
        return REGISTER_FAILURE
    })
}


export const login=(payload)=>(dispatch)=>{
    dispatch({type:LOGIN_LOADING})

    return axios.post(`https://masai-api-mocker.herokuapp.com/auth/login`,payload).then((r)=>{
        dispatch({type:LOGIN_SUCCESS,payload:r.data.token});
        console.log(r.data)
        return LOGIN_SUCCESS
    })
    .catch((e)=>{
        dispatch({type:LOGIN_FAILURE,payload:e})
        return LOGIN_FAILURE
    })
}


export const logout=()=>(dispatch)=>{
      return dispatch({type:LOGOUT_SUCCESS})
}


