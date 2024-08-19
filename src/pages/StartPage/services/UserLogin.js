import { URL } from '../../../utils/config';
import { getUserInfo } from '../helpers/getUserInfo';
import axios from 'axios';

let playerData = null;

export const UserLogin = (data) => {
    if (playerData) return playerData;
  
    const user = getUserInfo(data).user;
    const body = {
      tgId: user.id,
      isPremium: user.is_premium,
      userName: user.username
    };
  
    return axios.post(`${URL}/auth/login`, body).then((result) => {
      const newPlayerData = result.data.player;
  
      // Если данные о игроке изменились, обновляем состояние Redux
      if (newPlayerData !== playerData) {
        playerData = newPlayerData;
      } 
      return playerData;
    })
  }