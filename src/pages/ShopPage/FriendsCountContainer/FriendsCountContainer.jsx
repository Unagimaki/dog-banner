import styles from './friendsCountContainer.module.scss'
import { useSelector } from 'react-redux'

export const FriendsCountContainer = ({token}) => {

    const referralsCount = useSelector(state => state.referrals.playerReferralsCount)
    return(
        <div className={styles.friends_container}>
            <div className={styles.friends_container_text}>
                Ты пригласил <br/>
                <span>{referralsCount} друзей</span>
            </div>
        </div>
    )
}