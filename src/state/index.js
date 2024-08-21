import { combineReducers, createStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer/userReducer";
import { statsReducer } from "./reducers/statsReducer/statsReducer";
import { offersReducer } from "./reducers/offersReducer/offersReducer";

const rootReducer = combineReducers({
    user: userReducer,
    playersTop: statsReducer,
    offers: offersReducer
})

export const store = createStore(rootReducer)

store.subscribe(() => console.log(store.getState()))