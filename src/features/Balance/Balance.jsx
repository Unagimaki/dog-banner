import { useSelector } from 'react-redux'
import styles from './Balance.module.scss'

const Balance = ({top}) => {
    const img  = require('./assets/money_icon.png')
    const balance = useSelector(state => state.userBalance)
    return(
        <div style={{top: top}} className={styles.balance}>
            <img className={styles.balance_img} src={img} alt="money_icon" />
            <div className={styles.balance_text}>
                {balance}
            </div>
        </div>
    )
}

export default Balance