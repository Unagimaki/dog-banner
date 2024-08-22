import { FriendsCountContainer } from './FriendsCountContainer/FriendsCountContainer'
import { SkinList } from './SkinList/SkinList'
import { useNavigate } from 'react-router-dom';
import styles from './shopPage.module.scss'
import Balance from '../../features/Balance/Balance';
import { getData } from '../../services/getData';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { actionSetRef } from '../../state/reducers/referralsReducer/actions'
import { actionSetShopItems } from '../../state/reducers/shopReducer/actions';


const ShopPage = ({token}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    useEffect(() => {
        getData(token, 'referrals')
        .then(res => dispatch(actionSetRef(res.data)))
        .catch(() => console.log('Ref get error'))
        getData(token, 'shop-item')
        .then(res => dispatch(actionSetShopItems(res.data)))
        .catch(() => console.log('Get shop items error'))
    }, [])
    return(
        <div className={styles.shop_page}>
            <Balance top={'min(11.73vw, 43.99px)'}/>
            <FriendsCountContainer token={token}/>
            <SkinList/>
        </div>
    )
}

export default ShopPage