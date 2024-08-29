import { useDispatch, useSelector } from 'react-redux'
import styles from './offerModal.module.scss'
import { actionSetOfferModalVisible } from '../../../../state/reducers/offersReducer/actions'

export const OfferModal = () => {
    const dispatch = useDispatch()
    const title = useSelector(state => state.offers.title)
    const text = useSelector(state => state.offers.text)
    // const id = useSelector(state => state.offers.id)
    // const token = useSelector(state => state.user.token)

    const handleClickClose = () => {
        dispatch(actionSetOfferModalVisible(false))
    }
    const handleClickDone = () => {
        // setOfferDone(token, id)
        // .then(res => console.log(res))
        // .catch((e) => console.log('Done offer error: ' + e.response.status)
        // )
    }

    return(
        <div className={styles.container}>
            <div>{title}</div>
            <div>{text}</div>
            <button onClick={handleClickClose}>Закрыть</button>
            <button onClick={handleClickDone}>Завершить оффер</button>
        </div>
    )
}