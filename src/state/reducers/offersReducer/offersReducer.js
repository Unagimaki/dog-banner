import { isVisible } from "@testing-library/user-event/dist/utils";
import { SET_OFFER_INFO, SET_OFFER_MODAL_VISIBLE, SET_OFFERS } from "./types"

const initialState = {
    isVisible: false,
    title: '',
    text: '',
    offers: []
}

export const offersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_OFFERS:
            return {...state, offers: action.payload}
        case SET_OFFER_INFO:
            console.log(action.payload)
            
            const foundItem = state.offers.find(item => item.id === action.payload);
            return {
                ...state,
                title: foundItem ? foundItem.terms : '',
                text: foundItem ? foundItem.description : '',
                offers: state.offers
            }
        case SET_OFFER_MODAL_VISIBLE:
            return {...state, isVisible: action.payload}
        default: return state
    }
}