import {SET_LOGIN, SET_LOGOUT} from "./auth.types";

const InitialState={
    isLoggedIn:false,
    user:{}
}
export const authReducer=(state=InitialState,action)=>{
    switch (action.type) {
        case SET_LOGIN:
            return{...state,isLoggedIn: true,user:action.payload}
            break;
        case SET_LOGOUT:
            return{...state,InitialState}
            break;
        default:
            return{state}
            break
    }
}
