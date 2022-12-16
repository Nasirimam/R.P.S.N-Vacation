import { LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT_SUCCESS, PROFILE_FAILURE, PROFILE_LOADING, PROFILE_SUCCESS, REGISTER_FAILURE, REGISTER_LOADING, REGISTER_SUCCESS } from "./ActionType"

let token=localStorage.getItem("token")

const initialState={
    isAuth: false ,
    token:token || "",
    isLoading:false,
    isError:false,
}


export const reducer=(state=initialState,action)=>{
  const {type,payload}=action
  switch(type){
    case REGISTER_LOADING:{
      return {
        ...state,
        isLoading:true,
        isError:false
      }
    }
    case REGISTER_SUCCESS:{
      
      return {
        ...state,
        isLoading:false,
        isError:false,
        isAuth: true,
      }
    }
    case REGISTER_FAILURE:{
      return {
        ...state,
        isLoading:false,
        isError:true,
        isAuth:true,
      }
    }



    case LOGIN_LOADING:{
      return {
        ...state,
        isLoading:true,
        isError:false
      }
    }
    case LOGIN_SUCCESS:{
      localStorage.setItem("token",payload)
      return {
        ...state,
        isLoading:false,
        isError:false,
        token:payload,
        isAuth:true
      }
    }
    case LOGIN_FAILURE:{
      return {
        ...state,
        isLoading:false,
        isError:true,
        isAuth:true,
        token:""
      }
    }

    case LOGOUT_SUCCESS:{
      return {
       isAuth:true
      }
    }



    

    default:{
        return state
    }
  }
}