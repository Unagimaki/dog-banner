import StatItem from './StatItem/StatItem'
import styles from './stats.module.scss'

const Stats = () => {
    const damage = require('../assets/damage_icon.png')
    const energy = require('../assets/energy_icon.png')

    return(
        <div className={styles.stats}>
            <StatItem img={damage} text={'Урон 60'}/>
            <StatItem img={energy} text={'11 000'}/>
        </div>
    )
}

export default Stats