import styles from './logo.module.scss'

export const Logo = () => {
    const logo = require('../assets/logo.png')
    return(
        <div className={styles.logo}>
            LOGO
        </div>
    )
}