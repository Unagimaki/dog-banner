import { useDispatch, useSelector } from 'react-redux'
import styles from './offerModal.module.scss'
import { actionSetOfferModalVisible } from '../../../../state/reducers/offersReducer/actions'

export const OfferModal = () => {
    const dispatch = useDispatch()
    const title = useSelector(state => state.offers.title)
    const text = useSelector(state => state.offers.text)

    const handleClick = () => {
        dispatch(actionSetOfferModalVisible(false))
    }
    return(
        <div className={styles.container}>
            <div>{title}</div>
            <div>{text}</div>
            <button onClick={handleClick}>Закрыть</button>
        </div>
    )
}