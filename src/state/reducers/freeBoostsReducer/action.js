import { SET_FREE_BOOSTS } from "./types"

export const actionSetFreeBoosts = (boosts) => {    
    return {
        type: SET_FREE_BOOSTS,
        payload: boosts
    }
}