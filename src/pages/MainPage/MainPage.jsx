import styles from './mainPage.module.scss'
import { PagesLinks } from '../../shared/PagesLinks'
import Balance from '../../features/Balance/Balance'
import Stats from '../../features/Stats/Stats'
import { TreeModule } from '../../features/Tree/TreeModule'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getData } from '../../services/getData'
import { actionSetAutobot } from '../../state/reducers/autobotReducer/action'

const MainPage = ({token}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        getData(token, 'auto-bot')
        .then(res => dispatch(actionSetAutobot(res.data)))
        .catch(() => console.log('Auto-bot data error'))
    }, [])
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