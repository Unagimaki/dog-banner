import { combineReducers, createStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer/userReducer";
import { statsReducer } from "./reducers/statsReducer/statsReducer";
import { offersReducer } from "./reducers/offersReducer/offersReducer";
import { freeBoostsReducer } from "./reducers/freeBoostsReducer/freeBoostsReducer";
import { referralsReducer } from "./reducers/referralsReducer/referralsReducer";
import { shopReducer } from "./reducers/shopReducer/shopReducer";
import { autobotReducer } from "./reducers/autobotReducer/autobotReducer";
import { seasonReducer } from "./reducers/seasonReducer/seasonReducer";

const rootReducer = combineReducers({
    user: userReducer,
    playersTop: statsReducer,
    offers: offersReducer,
    boosts: freeBoostsReducer,
    referrals: referralsReducer,
    shop: shopReducer,
    bot: autobotReducer,
    season: seasonReducer
})

export const store = createStore(rootReducer)

// store.subscribe(() => console.log(store.getState()))