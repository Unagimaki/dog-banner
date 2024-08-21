import { useEffect } from 'react'
import Balance from '../../features/Balance/Balance'
import styles from './bonusPage.module.scss'
import { InviteButtons } from './InviteButtons/InviteButtons'
import { InviteInfo } from './InviteInfo/InviteInfo'
import { TaskContainer } from './TaskContainer/TaskContainer'
import { useDispatch, useSelector } from 'react-redux'
import { getOffers } from './services/getOffers'
import { actionSetOffers } from '../../state/reducers/offersReducer/actions'

const BonusPage = () => {
    const token = useSelector(state => state.user.token)
    const dispatch = useDispatch()
    useEffect(() => {
        getOffers(token)
        .then(res => 
            dispatch(actionSetOffers(res.data))
        )
        .catch(e => 
            console.log('error')
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

export default BonusPage