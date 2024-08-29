import styles from './mainPage.module.scss'
import { PagesLinks } from '../../shared/PagesLinks'
import Balance from '../../features/Balance/Balance'
import Stats from '../../features/Stats/Stats'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const MainPage = () => {
    const state = useSelector(state => state)
    useEffect(() => {
        console.log(state)      
    }, [])
    return(
        <div to={PagesLinks.GAME_URL}>
            <div className={styles.main_page}>
                <Stats/>
                <Balance/>
            </div>
        </div>

    )
}

export default MainPage