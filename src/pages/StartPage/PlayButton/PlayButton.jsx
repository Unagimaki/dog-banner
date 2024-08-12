import { Link } from 'react-router-dom'
import styles from './playButton.module.scss'
import { PagesLinks } from '../../../shared/PagesLinks'

export const PlayButton = () => {
    return(
        <Link to={PagesLinks.LOADING_URL} className={styles.button}>
            <div>
                Play on your mobile
            </div>
        </Link>
    )
}