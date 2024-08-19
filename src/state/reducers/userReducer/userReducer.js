import { SET_USER_BALANCE, SET_USER_DAMAGE, SET_USER_ENERGY, SET_USER_ID, SET_USER_IS_PREMIUM, SET_USER_MAX_ENERGY, SET_USER_REGENERATION, SET_USERNAME } from "./types"

const userState = {
    userId: null,
    userIsPremium: false,
    userName: '',
    userBalance: 0,
    userDamage: 0,
    userCurrentEnergy: 0,
    userMaxEnergy: 0,
  }
  
  export const userReducer = (state = userState, action) => {
      switch (action.type) {
          case SET_USER_DAMAGE: 
            return {...state, userDamage: action.payload}
          case SET_USERNAME:
              return {...state, userName: action.payload}
          case SET_USER_ID:
              return {...state, userId: action.payload}
          case SET_USER_IS_PREMIUM: 
              return {...state, userIsPremium: action.payload} 
          case SET_USER_BALANCE:
              return {...state, userBalance: action.payload}
          case SET_USER_ENERGY:
              return {...state, userCurrentEnergy: action.payload}
          case SET_USER_MAX_ENERGY:
              return {...state, userMaxEnergy: action.payload}
          case SET_USER_REGENERATION:
              return {...state, userRegeneration: action.payload}
          default:
              return state
      }
  }


