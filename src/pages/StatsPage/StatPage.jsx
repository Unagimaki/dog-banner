import { useEffect } from 'react'
import { StatCount } from './StatCount/StatCount'
import { StatList } from './StatList/StatList'
import styles from './statPage.module.scss'
import { StatTitle } from './StatTitle/StatTitle'
import { useDispatch, useSelector } from 'react-redux'
import { getPlayersTop } from './services/getPlayersTop'
import { actionSetPlayersTop } from '../../state/reducers/statsReducer/actions'

const StatPage = () => {
    const background = require('../../assets/images/background.png')
    const token = useSelector(state => state.user.token)
    const dispatch = useDispatch()
    useEffect(() => {
        getPlayersTop(token)
        .then(arr => 
            dispatch(actionSetPlayersTop(arr.data))
        )
        .catch(e => 
            console.log('getPlayersTop error')
        )
    }, [])

    return(
        <div className={styles.stat_page}>
            <img className={styles.stat_page_background} src={background} alt='img'/>
            <StatTitle/>
            <StatCount/>
            <StatList/>
        </div>
    )
}
export default StatPage