import { SET_REF } from "./types"

export const referralsReducer = (state={}, action) => {
    switch (action.type) {
        case SET_REF:
            return action.payload
    
        default: return state
    }
}