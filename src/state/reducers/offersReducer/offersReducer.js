import { SET_OFFER_INFO, SET_OFFER_MODAL_VISIBLE, SET_OFFERS } from "./types"

const initialState = {
    isVisible: false,
    title: '',
    text: '',
    id: '',
    offers: []
}

export const offersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_OFFERS:
            return {...state, offers: action.payload}
        case SET_OFFER_INFO:            
            const foundItem = state.offers.find(item => item.id === action.payload);
            return {
                ...state,
                title: foundItem ? foundItem.terms : '',
                text: foundItem ? foundItem.description : '',
                id: foundItem ? foundItem.id : '',
                offers: state.offers
            }
        case SET_OFFER_MODAL_VISIBLE:
            return {...state, isVisible: action.payload}
        default: return state
    }
}