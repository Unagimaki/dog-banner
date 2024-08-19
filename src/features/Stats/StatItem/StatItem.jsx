import { Link } from 'react-router-dom'
import styles from './statItem.module.scss'

const StatItem = ({img, count, text}) => {
    return(
        <Link className={styles.item} to={'/boosts'}>
            <img className={styles.item_img} src={img} alt="icon" />
            <div className={styles.item_container}>
                <div className={styles.item_container_title}> {text} </div>
                <div className={styles.item_container_count}> {count} </div>
            </div>
        </Link>
    )
}

export default StatItem