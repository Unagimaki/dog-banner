import { SET_OFFER_INFO, SET_OFFER_MODAL_VISIBLE, SET_OFFER_TITLE, SET_OFFERS } from "./types"

export const actionSetOffers = (offers) => {
    return {
        type: SET_OFFERS,
        payload: offers
    }
}
export const actionSetOfferInfo = (id) => {
    return {
        type: SET_OFFER_INFO,
        payload: id
    }
}
export const actionSetOfferModalVisible = (boolean) => {   
    return {
        type: SET_OFFER_MODAL_VISIBLE,
        payload: boolean
    }
}