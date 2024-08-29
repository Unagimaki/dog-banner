import Balance from '../../features/Balance/Balance'
import styles from './bonusPage.module.scss'
import { InviteInfo } from './components/InviteInfo/InviteInfo'
import { TaskContainer } from './components/TaskContainer/TaskContainer'
import { InviteButtons } from './components/InviteButtons/InviteButtons'

const OffersPage = () => {

    return(
        <div className={styles.bonus_page}>
            <Balance top={'min(11.73vw, 44px'}/>
            <InviteInfo/>
            <InviteButtons/>
            <TaskContainer/>
        </div>
    )
}

export default OffersPage