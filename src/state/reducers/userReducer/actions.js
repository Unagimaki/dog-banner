import { SET_USER, SET_USER_TOKEN } from "./types"

export const actionSetUser = (user) => {
  return {
    type: SET_USER,
    payload: user
  }
} 
export const actionSetUserToken = (token) => {
  return {
    type: SET_USER_TOKEN,
    payload: token
  }
} 