import styles from './skinItem.module.scss'

export const SkinItem = ({title, currentLevel, id, itemType}) => {
    const money_icon = require('../assets/money_icon.png')
    const autobot = require('../assets/autobot.png')
    return(
        <div className={styles.skin_item}>
            <div className={styles.skin_item_lvl}>{currentLevel} lvl</div>
            <div className={styles.skin_item_img}>
                <img src={autobot} alt="dragon" />
            </div>
            <div className={styles.skin_item_name}>{title}</div>
            <div className={styles.skin_item_profit}>
                <div className={styles.skin_item_profit_text}>
                    Доход в час
                </div>
                <div className={styles.skin_item_profit_count}>
                    <img src={money_icon} alt="money_icon"/>
                    <span>+20%</span>
                </div>
            </div>
            <button className={styles.skin_item_button}>
                <div className={styles.skin_item_button_text}>
                    Купить за 1000
                </div>
                <img src={money_icon} alt="money_icon" />
            </button>
        </div>
    )
}