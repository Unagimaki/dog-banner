import { SET_SEASONS } from "./types"

const initialState = {

}

export const seasonReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEASONS:
            return action.payload    
        default: return state
    }
}