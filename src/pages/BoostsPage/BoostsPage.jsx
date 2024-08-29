import { BoostsContainer } from './BoostsContainer/BoostsContainer'
import styles from './boostsPage.module.scss'
import { ImproveContainer } from './ImproveContainer/ImproveContainer'
import Balance from '../../features/Balance/Balance'

const BoostsPage = () => {
    return(
        <div
            className={styles.boosts_page}
        >
            <Balance top={'min(11.73vw, 44px'}/>
            <BoostsContainer/>
            <ImproveContainer/>
            
        </div>
    )
}

export default BoostsPage