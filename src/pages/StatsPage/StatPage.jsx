import { MainButton } from '@vkruglikov/react-telegram-web-app'
import FooterMenu from '../../features/FooterMenu/FooterMenu'
import { StatButton } from './StatButton/StatButton'
import { StatCount } from './StatCount/StatCount'
import { StatList } from './StatList/StatList'
import styles from './statPage.module.scss'
import { StatTitle } from './StatTitle/StatTitle'
import { useNavigate } from 'react-router-dom'

const StatPage = () => {
    const navigate = useNavigate()
    return(
        <div className={styles.stat_page}>
            <StatTitle/>
            <StatCount/>
            <StatList/>
            <StatButton/>
            <FooterMenu/>
            <MainButton
                text="Back"
                onClick={() => navigate(-1)}                
            />
        </div>
    )
}
export default StatPage