import { useEffect, useState } from 'react'
import { BoostModal } from './BoostModal/BoostModal'
import { BoostsContainer } from './BoostsContainer/BoostsContainer'
import styles from './boostsPage.module.scss'
import { ImproveContainer } from './ImproveContainer/ImproveContainer'
import Balance from '../../features/Balance/Balance'
import FooterMenu from '../../features/FooterMenu/FooterMenu'
import { useNavigate } from 'react-router-dom'
import { MainButton } from '@vkruglikov/react-telegram-web-app'

const BoostsPage = () => {
    const navigate = useNavigate()
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
            <Balance top={'11.73vw'}/>
            <BoostsContainer handleModal={handleModal}/>
            <ImproveContainer/>
            <BoostModal handleModal={handleModal} boostModalIsVisible={boostModalIsVisible}/>
            <FooterMenu/>
            <MainButton
                text="Back"
                onClick={() => navigate(-1)}
            />
        </div>
    )
}

export default BoostsPage