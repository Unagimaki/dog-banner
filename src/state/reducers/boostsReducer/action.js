import { SET_BOOSTS } from "./types"

export const actionSetBoosts = (boosts) => {
    return {
        type: SET_BOOSTS,
        payload: boosts
    }
}