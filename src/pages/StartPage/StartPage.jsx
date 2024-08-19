import styles from './startPage.module.scss'
import { Leaves } from './Leaves/Leaves'
import { Logo } from './Logo/Logo'
import { PlayButton } from './PlayButton/PlayButton'
import { QRCode } from './QRCode/QRCode'
import { useEffect } from 'react'
import { UserLogin } from './services/UserLogin'
import { useDispatch } from 'react-redux'
import { setUserBalance, setUserDamage, setUserEnergy, setUserMaxEnergy } from '../../state/reducers/userReducer/actions'

const StartPage = () => {
    const dispatch = useDispatch()
    const query = 'query_id=AAFkXtY+UAAAAAGRe1hSNVI7m&user=%7B%22id%22%3A349593188%2C%22first_name%22%3A%22Dmitryyyyyy%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22dmitrygalanin%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1723488311&hash=8b0a6e31c32e8bf69debf21fa2b5d0ffbbcf5a4c35949dbb45ddb54aca107cfO';
    useEffect(() => {
        UserLogin(query).then(player => {
            console.log(player)
            dispatch(setUserDamage(player.damage))
            dispatch(setUserBalance(player.balance))
            dispatch(setUserMaxEnergy(player.maxEnergy))
            dispatch(setUserEnergy(player.energy))      
        })
    }, [])


    return(
        <div className={styles.start}>
            <Logo/>
            <QRCode/>
            <PlayButton/>
            <Leaves/>
        </div>  
    )
}

export default StartPage