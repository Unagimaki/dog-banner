import { SET_AUTOBOT } from "./types";

const initialState = {

}

export const autobotReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTOBOT:
            
            return action.payload
    
        default: return state
    }
}