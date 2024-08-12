import { useNavigate } from 'react-router-dom'
import FooterMenu from '../../features/FooterMenu/FooterMenu'
import styles from './rewardsPage.module.scss'
import { MainButton } from '@vkruglikov/react-telegram-web-app'

const RewardsPage = () => {
    const navigate = useNavigate()
    return(
        <div className={styles.rewards_container}>
            <FooterMenu/>
            <MainButton
                text="Back"
                onClick={() => navigate(-1)}
            />
        </div>
    )
}

export default RewardsPage