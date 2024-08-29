import { SET_BOOSTS } from "./types";

const initialState = {

}

export const boostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOSTS:
            return action.payload
    
        default: return state
    }
}