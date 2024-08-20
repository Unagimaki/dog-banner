import Balance from '../../features/Balance/Balance'
import styles from './bonusPage.module.scss'
import { InviteButtons } from './InviteButtons/InviteButtons'
import { InviteInfo } from './InviteInfo/InviteInfo'
import { TaskContainer } from './TaskContainer/TaskContainer'

const BonusPage = () => {
    return(
        <div className={styles.bonus_page}>
            <Balance top={'min(11.73vw, 44px'}/>
            <InviteInfo/>
            <InviteButtons/>
            <TaskContainer/>
        </div>
    )
}

export default BonusPage