import { Link } from 'react-router-dom'
import styles from './mainPage.module.scss'
import { PagesLinks } from '../../shared/PagesLinks'

const MainPage = () => {
    return(
        <Link to={PagesLinks.GAME_URL}>
            <div className={styles.main_page}>
                
           </div>
        </Link>

    )
}

export default MainPage