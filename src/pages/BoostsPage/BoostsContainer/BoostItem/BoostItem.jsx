import { useSelector } from 'react-redux'
import styles from './boostItem.module.scss'
import { boostData } from '../../service/boostData'

export const BoostItem = ({title, type, id}) => {
    const energy_img = require('../../assets/rocket_icon.png')
    const money_img = require('../../assets/money_icon.png')
    const text = type === 'energy' ? 'Восполняет всю энергию' :
    'х10 лифов за тап в секунду на 10 секунд'
    const img = type === 'energy' ? energy_img : money_img
    const token = useSelector(state => state.user.token)
    const handleClick = () => {
        boostData(token, id)
    }

    return(
        <div onClick={handleClick} className={styles.boost_item}>
            <div className={styles.boost_item_img_container}>
                <img src={img} alt={type} />
            </div>
            <div className={styles.boost_item_info}>
                <div className={styles.boost_item_info_title}>{title}</div>
                <div className={styles.boost_item_info_text}>{text}</div>
            </div>

        </div>
    )
}