import { useSelector } from 'react-redux'
import StatItem from './StatItem/StatItem'
import styles from './stats.module.scss'

const Stats = () => {
    const damageImg = require('./assets/damage_icon.png')
    const energyImg = require('./assets/energy_icon.png')
    const damage = useSelector(state => state.userDamage)
    const energy = useSelector(state => state.userCurrentEnergy)
     


    return(
        <div className={styles.stats}>
            <StatItem img={damageImg} count={damage} text={'Пучки'}/>
            <StatItem img={energyImg} count={energy} text={'Энергия'}/>
        </div>
    )
}

export default Stats