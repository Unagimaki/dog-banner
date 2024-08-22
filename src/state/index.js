import { combineReducers, createStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer/userReducer";
import { statsReducer } from "./reducers/statsReducer/statsReducer";
import { offersReducer } from "./reducers/offersReducer/offersReducer";
import { boostsReducer } from "./reducers/boostsReducer/boostsReducer";
import { referralsReducer } from "./reducers/referralsReducer/referralsReducer";

const rootReducer = combineReducers({
    user: userReducer,
    playersTop: statsReducer,
    offers: offersReducer,
    boosts: boostsReducer,
    referrals: referralsReducer,
})

export const store = createStore(rootReducer)

store.subscribe(() => console.log(store.getState()))