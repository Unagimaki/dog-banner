import { useNavigate } from 'react-router-dom'
import styles from './playButton.module.scss'
import { PagesLinks } from '../../../shared/PagesLinks'

export const PlayButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/main")
    }

    return(
        <button onClick={handleClick} to={PagesLinks.LOADING_URL} className={styles.button}>
            <div>
                Play on your mobile
            </div>
        </button>
    )
}