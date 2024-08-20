import { FriendsCountContainer } from './FriendsCountContainer/FriendsCountContainer'
import { SkinList } from './SkinList/SkinList'
import { MainButton } from '@vkruglikov/react-telegram-web-app';
import { useNavigate } from 'react-router-dom';

import styles from './shopPage.module.scss'
import Balance from '../../features/Balance/Balance';
import FooterMenu from '../../features/FooterMenu/FooterMenu';


const ShopPage = () => {
    const navigate = useNavigate()

    return(
        <div className={styles.shop_page}>
            <Balance top={'min(11.73vw, 43.99px)'}/>
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