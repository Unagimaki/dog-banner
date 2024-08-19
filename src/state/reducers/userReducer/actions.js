// actions.js
import { SET_USER_DAMAGE, SET_USER_ENERGY, SET_USER_MAX_ENERGY, SET_USER_BALANCE, SET_USER_REGENERATION, SET_USER_ID, SET_USERNAME, SET_USER_IS_PREMIUM } from './types';

export const setUserDamage = (damage) => ({
  type: SET_USER_DAMAGE,
  payload: damage
});

export const setUserEnergy = (energy) => ({
  type: SET_USER_ENERGY,
  payload: energy
});

export const setUserMaxEnergy = (maxEnergy) => ({
  type: SET_USER_MAX_ENERGY,
  payload: maxEnergy
});

export const setUserBalance = (balance) => ({
  type: SET_USER_BALANCE,
  payload: balance
});

export const setUserRegeneration = (regeneration) => ({
  type: SET_USER_REGENERATION,
  payload: regeneration
});
export const setUserId = (id) => ({
  type: SET_USER_ID,
  payload: id
});

export const setUsername = (username) => ({
  type: SET_USERNAME,
  payload: username
});

export const setIsPremium = (isPremium) => ({
  type: SET_USER_IS_PREMIUM,
  payload: isPremium
});