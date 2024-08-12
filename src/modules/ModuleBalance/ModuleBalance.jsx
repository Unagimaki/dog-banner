import styles from './moduleBalance.module.scss'

const ModuleBalance = ({top}) => {
    const img  = require('./assets/money_icon.png')
    return(
        <div style={{top: top}} className={styles.balance}>
            <img className={styles.balance_img} src={img} alt="money_icon" />
            <div className={styles.balance_text}>
                126,147,475
            </div>
        </div>
    )
}

export default ModuleBalance