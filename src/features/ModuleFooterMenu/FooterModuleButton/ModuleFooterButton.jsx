import { Link } from 'react-router-dom'
import styles from './moduleFooterButton.module.scss'

const ModuleFooterButton = ({text, to, img, current_url}) => {
    return(
        <Link to={`${to}`} className={styles.button}>
            
            <img className={styles.button_img} src={img} alt={text} />
            <div style={{color: `${current_url === to ? '#8CDB4E' : '#fff'}`}} className={styles.button_text}>
                {text}
            </div>
            
        </Link>

    )
}

export default ModuleFooterButton