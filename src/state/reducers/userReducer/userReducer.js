import { SET_USER, SET_USER_TOKEN } from "./types"
  
export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_USER: 
            return action.payload
        case SET_USER_TOKEN:
            return {...state, token: action.payload}
        default: return state
    }
}


