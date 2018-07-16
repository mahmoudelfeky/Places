import { TRY_AUTH } from "./actionTypes";
export const tryAuth = (authData)=>{
    return {
        type:tryAuth,
        authData
    }
}