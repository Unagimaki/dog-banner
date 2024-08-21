import { useEffect, useState } from 'react'
import { BoostsContainer } from './BoostsContainer/BoostsContainer'
import styles from './boostsPage.module.scss'
import { ImproveContainer } from './ImproveContainer/ImproveContainer'
import Balance from '../../features/Balance/Balance'

const BoostsPage = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      setVisible(true);
    }, []);

    return(
        <div
            className={`${styles.boosts_page} ${visible? styles['boosts_page-enter-active'] : styles['boosts_page-leave']}`}
        >
            <Balance top={'min(11.73vw, 44px'}/>
            <BoostsContainer/>
            <ImproveContainer/>
        </div>
    )
}

export default BoostsPage