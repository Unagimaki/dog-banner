import { SkinContainer } from './SkinContainer/SkinContainer'
import styles from './skinList.module.scss'

export const SkinList = () => {
    return(
        <div className={styles.skin_list}>
            <div className={styles.skin_list_wrapper}></div>
            <SkinContainer/>
            <SkinContainer/>
        </div>
    )
}