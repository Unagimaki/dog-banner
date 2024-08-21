import { Link, useNavigate } from 'react-router-dom'
import styles from './FooterMenuButton.module.scss'

const FooterMenuButton = ({text, to, img, current_url}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to)
    }
    return(
        <button onClick={handleClick} className={styles.button}>
            
            <img className={styles.button_img} src={img} alt={text} />
            <div style={{color: `${current_url === to ? '#8CDB4E' : '#fff'}`}} className={styles.button_text}>
                {text}
            </div>
            
        </button>

    )
}

export default FooterMenuButton