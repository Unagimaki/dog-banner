import { FriendsCountContainer } from './FriendsCountContainer/FriendsCountContainer'
import { SkinList } from './SkinList/SkinList'
import styles from './shopPage.module.scss'
import Balance from '../../features/Balance/Balance';
import { useSelector } from 'react-redux';


const ShopPage = () => {
    const state = useSelector(state => state)
    
    return(
        <div className={styles.shop_page}>
            <Balance top={'min(11.73vw, 43.99px)'}/>
            <FriendsCountContainer referralsCount={state.referrals.playerReferralsCount}/>
            <SkinList shop={state.shop}/>
        </div>
    )
}

export default ShopPage