import { Link } from 'react-router-dom'
import styles from './statItem.module.scss'

const StatItem = ({img, text}) => {
    return(
        <Link className={styles.item} to={'/boosts'}>
            <img className={styles.item_img} src={img} alt="icon" />
            <div className={styles.item_count}>
                {text}
            </div>
        </Link>
    )
}

export default StatItem