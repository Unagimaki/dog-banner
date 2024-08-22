import { SET_REF } from "./types"

export const actionSetRef = (ref) => {
    return {
        type: SET_REF,
        payload: ref
    }
}