import styles from './InviteButtons.module.scss'

export const InviteButtons = () => {
    const invite_img = require('../../assets/invite_icon.png')
    const copy_img = require('../../assets/copy_icon.png')
    return(
        <div className={styles.container}>
            <button className={styles.container_invite_button}>
                <div className={styles.container_invite_button_icon}>
                    <img src={invite_img} alt="invite_img" />
                </div>
                <div className={styles.container_invite_button_text}>Пригласить</div>
            </button>
            <button className={styles.container_copy_button}>
                <img src={copy_img} alt="copy_img" />
            </button>
        </div>
    )
}