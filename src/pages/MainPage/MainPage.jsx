import styles from './mainPage.module.scss'
import { PagesLinks } from '../../shared/PagesLinks'
import Balance from '../../features/Balance/Balance'
import Stats from '../../features/Stats/Stats'
import { TreeModule } from '../../features/Tree/TreeModule'

const MainPage = () => {
    return(
        <div to={PagesLinks.GAME_URL}>
            <div className={styles.main_page}>
                <Stats/>
                <Balance/>
                <TreeModule/>
            </div>
        </div>

    )
}

export default MainPage