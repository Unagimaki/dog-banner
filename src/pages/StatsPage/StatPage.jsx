import { useEffect } from 'react'
import styles from './statPage.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { actionSetPlayersTop } from '../../state/reducers/statsReducer/actions'
import { getData } from '../../services/getData'
import { StatTitle } from './components/StatTitle/StatTitle'
import { StatCount } from './components/StatCount/StatCount'
import { StatList } from './components/StatList/StatList'

const StatPage = () => {
    const token = useSelector(state => state.user.token)
    const dispatch = useDispatch()
    useEffect(() => {
        getData(token, 'player/top')
        .then(arr => 
            dispatch(actionSetPlayersTop(arr.data))
        )
        .catch(e => 
            console.log('getPlayersTop error')
        )
    }, [])

    return(
        <div className={styles.stat_page}>
            <StatTitle/>
            <StatCount/>
            <StatList/>
        </div>
    )
}
export default StatPage