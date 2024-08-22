import { useSelector } from 'react-redux'
import { BoostsTitle } from '../BoostsTitle/BoostsTitle'
import { BoostItem } from './BoostItem/BoostItem'
import styles from './boostsContainer.module.scss'

export const BoostsContainer = () => {
    const boosts = useSelector(state => state.boosts.freeBoosts)
    
    return(
        <div className={styles.boosts_container}>
            <BoostsTitle title='Бесплатные бустеры'/>
            {
                boosts.map((item, index) => {
                    return <BoostItem
                        title={item.freeBoosts.title}
                        type={item.freeBoosts.boostType}
                        key={index}
                        id={item.id}
                    />
                })
            }
        </div>
    )
}