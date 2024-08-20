import { FriendsCountContainer } from './FriendsCountContainer/FriendsCountContainer'
import { SkinList } from './SkinList/SkinList'
import { useNavigate } from 'react-router-dom';
import styles from './shopPage.module.scss'
import Balance from '../../features/Balance/Balance';


const ShopPage = () => {
    const navigate = useNavigate()

    return(
        <div className={styles.shop_page}>
            <Balance top={'min(11.73vw, 43.99px)'}/>
            <FriendsCountContainer/>
            <SkinList/>
        </div>
    )
}

export default ShopPage