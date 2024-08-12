import { Link } from 'react-router-dom'
import { BalanceModule } from '../../modules/ModuleBalance/ModuleBalance'
import { ModuleStats } from '../../modules/ModuleStats/ModuleStats'
import { PagesLinksEnum } from '../../shared/PagesLinks.enum'
import styles from './mainPage.module.scss'

const MainPage = () => {
    return(
        <Link to={PagesLinksEnum.GAME_URL}>
            <div className={styles.main_page}>
                <ModuleStats/>
                <BalanceModule/>
            </div>
        </Link>

    )
}

export default MainPage