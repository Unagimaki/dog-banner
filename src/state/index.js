import { combineReducers, createStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer/userReducer";
import { statsReducer } from "./reducers/statsReducer/statsReducer";
import { offersReducer } from "./reducers/offersReducer/offersReducer";
import { boostsReducer } from "./reducers/boostsReducer/boostsReducer";
import { referralsReducer } from "./reducers/referralsReducer/referralsReducer";
import { shopReducer } from "./reducers/shopReducer/shopReducer";
import { autobotReducer } from "./reducers/autobotReducer/autobotReducer";

const rootReducer = combineReducers({
    user: userReducer,
    playersTop: statsReducer,
    offers: offersReducer,
    boosts: boostsReducer,
    referrals: referralsReducer,
    shop: shopReducer,
    bot: autobotReducer
})

export const store = createStore(rootReducer)

store.subscribe(() => console.log(store.getState()))