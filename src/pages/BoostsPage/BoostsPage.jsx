import { useEffect, useState } from 'react'
import { BoostsContainer } from './BoostsContainer/BoostsContainer'
import styles from './boostsPage.module.scss'
import { ImproveContainer } from './ImproveContainer/ImproveContainer'
import Balance from '../../features/Balance/Balance'
import { getData } from '../../services/getData'
import { useDispatch, useSelector } from 'react-redux'
import { actionSetFreeBoosts } from '../../state/reducers/boostsReducer/action'

const BoostsPage = () => {
    const [visible, setVisible] = useState(false);
    const token = useSelector(state => state.user.token)
    const dispatch = useDispatch()
    useEffect(() => {
        getData(token, 'free-boosts').then(res => 
            dispatch(actionSetFreeBoosts(res.data))
        )
        .catch(e => 
            console.log('getPlayersTop error')
        )
    }, [])

    return(
        <div
            className={`${styles.boosts_page} ${visible? styles['boosts_page-enter-active'] : styles['boosts_page-leave']}`}
        >
            <Balance top={'min(11.73vw, 44px'}/>
            <BoostsContainer/>
            <ImproveContainer/>
            
        </div>
    )
}

export default BoostsPage