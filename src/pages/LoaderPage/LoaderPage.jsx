import { useEffect } from 'react'
import styles from './loaderPage.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../services/getData';
import { actionSetShopItems } from '../../state/reducers/shopReducer/actions';
import { actionSetSeason } from '../../state/reducers/seasonReducer/actions';
import { actionSetPlayersTop } from '../../state/reducers/statsReducer/actions';
import { actionSetRef } from '../../state/reducers/referralsReducer/actions';
import { actionSetFreeBoosts } from '../../state/reducers/freeBoostsReducer/action';
import { actionSetBoosts } from '../../state/reducers/boostsReducer/action';
import { actionSetOffers } from '../../state/reducers/offersReducer/actions';
import { actionSetAutobot } from '../../state/reducers/autobotReducer/action';
import { useNavigate } from 'react-router-dom';

const LoaderPage = () => {
  const token = useSelector(state => state.user.token)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    
    async function fetchData() {
      try {
        const [freeBoosts, seasons, top, referrals, boosts, shop, offers, bot] = await Promise.all([
          getData(token, 'free-boosts'),
          getData(token, 'seasons'),
          getData(token, 'player/top'),
          getData(token, 'referrals'),
          getData(token, 'boosts'),
          getData(token, 'shop-item'),
          getData(token, 'offers'),
          getData(token, 'auto-bot'),
        ])
          dispatch(actionSetFreeBoosts(freeBoosts.data))
          dispatch(actionSetSeason(seasons.data.season))
          dispatch(actionSetPlayersTop(top.data))
          dispatch(actionSetRef(referrals.data))
          dispatch(actionSetBoosts(boosts.data))
          dispatch(actionSetShopItems(shop.data))
          dispatch(actionSetOffers(offers.data))
          dispatch(actionSetAutobot(bot.data))
      } catch (e) { console.error(e) }
    }
    
    fetchData().then(() => navigate('/main'))
  }, []);
    
    return(
        <div className={styles.loading}>
            Loading...
            {/* <img src={loading} alt="loading" /> */}
        </div>
    )
}

export default LoaderPage