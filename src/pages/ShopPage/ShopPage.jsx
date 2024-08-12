import { FriendsCountContainer } from './FriendsCountContainer/FriendsCountContainer'
import { SkinList } from './SkinList/SkinList'
import { MainButton } from '@vkruglikov/react-telegram-web-app';
import { useNavigate } from 'react-router-dom';

import styles from './shopPage.module.scss'
import Balance from '../../features/Balance/Balance';


const ShopPage = () => {
    const navigate = useNavigate()

    return(
        <div className={styles.shop_page}>
            <Balance/>
            <FriendsCountContainer/>
            <SkinList/>
            <MainButton
                text="Back"
                onClick={() => navigate(-1)}
            />
        </div>
    )
}

export default ShopPage