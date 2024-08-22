import { SET_AUTOBOT } from "./types"

export const actionSetAutobot = (data) => {
    return {
        type: SET_AUTOBOT,
        payload: data
    }
}