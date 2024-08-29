import { SET_SHOP_ITEMS } from "./types"

const initialState = {}

export const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SHOP_ITEMS:
            return action.payload
        default: return state
    }
}