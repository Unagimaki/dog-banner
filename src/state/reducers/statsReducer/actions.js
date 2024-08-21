import { SET_PLAYER_TOP } from "./types"

export const actionSetPlayersTop = (arr) => {
    return{
        type: SET_PLAYER_TOP,
        payload: arr
    }
}