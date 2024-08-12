import { useEffect } from 'react'
import styles from './loaderPage.module.scss'
import { PagesLinks } from '../../shared/PagesLinks'

const LoaderPage = () => {
    const loading = require('./assets/loading.png')

    useEffect(() => {
        setTimeout(() => {
            window.location.assign(PagesLinks.MAIN_URL);
        }, 1000)
    }, [])
    
    return(
        <div className={styles.loading}>
            <img src={loading} alt="loading" />
        </div>
    )
}

export default LoaderPage