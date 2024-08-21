import styles from './taskItem.module.scss'

export const TaskItem = ({description, isCompleted, reward, terms, title}) => {
    const arrow_img = require('../../assets/arrow.png')
    const done_img = require('../../assets/done.png')
    const image = require('../../assets/image.png')
    const money = require('../../assets/money.png')
     
    return(
        <div className={styles.container}>
            <div className={styles.container_image}>
                <img src={image} alt="image" />
            </div>
            <div className={styles.container_info}>
                <div className={styles.container_info_title}>{terms}</div>
                <div className={styles.container_info_amount}>
                    <img src={money} alt="money" />
                    <div>+{reward}</div>
                </div>
            </div>
            <div className={styles.container_done}>
                <img src={isCompleted ? done_img : arrow_img} alt="img" />
            </div>
        </div>
    )
}