import styles from './improveItem.module.scss'

export const ImproveItem = ({title, text, cost, imgURL}) => {
    const money_icon = require('../../assets/money_icon.png')
    return(
        <div className={styles.item}>
            <div className={styles.item_img}>
                <img src={imgURL} alt={title}/>
            </div>
            <div className={styles.item_title}>
                {title}
            </div>
            <div className={styles.item_text}>
                {text}
            </div>
            <button className={styles.item_button}>
                <div>Купить за {cost}</div>
                <img src={money_icon} alt="money_icon" />
            </button>
        </div>
    )
}