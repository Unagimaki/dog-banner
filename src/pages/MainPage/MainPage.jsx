import { Link } from 'react-router-dom'
import styles from './mainPage.module.scss'
import { PagesLinks } from '../../shared/PagesLinks'
import Balance from '../../features/Balance/Balance'
import Stats from '../../features/Stats/Stats'

const MainPage = () => {
    return(
        <Link to={PagesLinks.GAME_URL}>
            <div className={styles.main_page}>
                <Stats/>
                <Balance/>    
            </div>
        </Link>

    )
}

export default MainPage