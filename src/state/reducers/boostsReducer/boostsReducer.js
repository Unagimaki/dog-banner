import { SET_FREE_BOOSTS } from "./types";

const initialState = {
    freeBoosts: []
}
export const boostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FREE_BOOSTS:
            return {...state, freeBoosts: action.payload} 
    
        default: return state
    }
}