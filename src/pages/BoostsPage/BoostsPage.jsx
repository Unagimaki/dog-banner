import { useEffect, useState } from 'react'
import { BoostModal } from './BoostModal/BoostModal'
import { BoostsContainer } from './BoostsContainer/BoostsContainer'
import styles from './boostsPage.module.scss'
import { ImproveContainer } from './ImproveContainer/ImproveContainer'

const BoostsPage = () => {
    const [boostModalIsVisible, setBoostModalIsVisible] = useState(false)
    const [visible, setVisible] = useState(false);
    const handleModal = () => {
        setBoostModalIsVisible(!boostModalIsVisible)
    }

    useEffect(() => {
      setVisible(true);
    }, []);

    return(
        <div
            className={`${styles.boosts_page} ${visible? styles['boosts_page-enter-active'] : styles['boosts_page-leave']}`}
        >
            <BoostsContainer handleModal={handleModal}/>
            <ImproveContainer/>
            <BoostModal handleModal={handleModal} boostModalIsVisible={boostModalIsVisible}/>
        </div>
    )
}

export default BoostsPage