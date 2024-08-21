import { SET_OFFERS } from "./types"

export const offersReducer = (state = [], action) => {
    switch (action.type) {
        case SET_OFFERS:
            return action.payload
    
        default: return state
    }
}