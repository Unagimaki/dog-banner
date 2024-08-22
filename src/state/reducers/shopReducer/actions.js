import { SET_SHOP_ITEMS } from "./types"

export const actionSetShopItems = (items) => {
    return {
        type: SET_SHOP_ITEMS,
        payload: items
    }
}