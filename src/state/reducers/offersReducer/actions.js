import { SET_OFFERS } from "./types"

export const actionSetOffers = (offers) => {
    return {
        type: SET_OFFERS,
        payload: offers
    }
}