import { URL } from '../../../utils/config';
import { getUserInfo } from '../helpers/getUserInfo';
import axios from 'axios';

let playerData = null;
const example = {
  "tgId": "123456789",
  "isPremium": true,
  "userName": "johndoe"
}

export const UserLogin = (data) => {
    if (playerData) return playerData;
  
    const userFromTg = getUserInfo(data).user;
    
    const body = {
      tgId: userFromTg.id,
      isPremium: userFromTg.is_premium,
      userName: userFromTg.username
    }
  
    return axios.post(`${URL}/auth/login`, example).then((result) => {
      const newPlayerData = result.data;
  
      // Если данные о игроке изменились, обновляем состояние Redux
      if (newPlayerData !== playerData) {
        playerData = newPlayerData;
      } 
      return playerData;
    })
  }