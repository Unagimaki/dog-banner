import styles from './statCount.module.scss'

export const StatCount = () => {
    const tether_icon = require('../assets/tether.png')
    return(
        <div className={styles.count}>
            <div className={styles.count_first}>
                <div className={styles.count_first_text}>1.000.000</div>
                <img className={styles.count_first_img} src={tether_icon} alt="money_icon" /> 
            </div>
            <div>\</div>
            <div className={styles.count_first}>
                <div className={styles.count_first_text}>1.000.000</div>
                <img className={styles.count_first_img} src={tether_icon} alt="money_icon" />
            </div>
        </div>
    )
}