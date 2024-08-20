import { StatItem } from './StatItem/StatItem'
import styles from './statList.module.scss'

export const StatList = () => {
    return(
        <div className={styles.list}>
            <div className={styles.list_wrapper}>
                <StatItem/>
                <StatItem/>
                <StatItem/>
                <StatItem/>
                <StatItem/>
                <StatItem/>
                <StatItem/>
                <StatItem/>
                <StatItem/>
                <StatItem/>
                <StatItem/>
                <StatItem/>
            </div>
        </div>
    )
}