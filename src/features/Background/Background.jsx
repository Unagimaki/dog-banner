import styles from './background.module.scss'

export const Background = () => {
    const img = require('../../assets/images/background.png')
    return(
        <div className={styles.container}>
            <img src={img} alt="background" />
        </div>
    )
}