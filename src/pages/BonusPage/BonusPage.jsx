import { useNavigate } from 'react-router-dom'
import FooterMenu from '../../features/FooterMenu/FooterMenu'
import styles from './bonusPage.module.scss'
import { MainButton } from '@vkruglikov/react-telegram-web-app'

const BonusPage = () => {
    const navigate = useNavigate()
    return(
        <div className={styles.bonus_page}>
            <FooterMenu/>
            <MainButton
                text="Back"
                onClick={() => navigate(-1)}
            />
        </div>
    )
}

export default BonusPage