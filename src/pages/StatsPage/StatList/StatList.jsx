import { useSelector } from 'react-redux'
import { StatItem } from './StatItem/StatItem'
import styles from './statList.module.scss'

export const StatList = () => {
    const players = useSelector(state => state.playersTop)
    console.log(players);
    
    return(
        <div className={styles.list}>
            <div className={styles.list_wrapper}>
                {
                    players.map((player, index) => {
                        return <StatItem
                            balance={player.balance}
                            name={player.userName}
                            rank={player.rank}
                            key={index}
                        />
                    })
                }
            </div>
        </div>
    )
}