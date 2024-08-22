import { useEffect } from 'react'
import Balance from '../../features/Balance/Balance'
import styles from './bonusPage.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { actionSetOffers } from '../../state/reducers/offersReducer/actions'
import { getData } from '../../services/getData'
import { InviteInfo } from './components/InviteInfo/InviteInfo'
import { TaskContainer } from './components/TaskContainer/TaskContainer'
import { InviteButtons } from './components/InviteButtons/InviteButtons'

const OffersPage = () => {
    const token = useSelector(state => state.user.token)
    const dispatch = useDispatch()
    useEffect(() => {
        getData(token, 'offers')
        .then(res => 
            dispatch(actionSetOffers(res.data))
        )
        .catch(e => 
            console.log('Get offers error')
        )
    }, [])
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