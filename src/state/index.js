import { createStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer/userReducer";

export const store = createStore(userReducer)

store.subscribe(() => console.log(store.getState()))