import styles from './skinContainer.module.scss'
import { SkinItem } from './SkinItem/SkinItem'
import { SkinTitle } from './SkinTitle/SkinTitle'

export const SkinContainer = ({shop}) => {   
    return(
        <div className={styles.skin_container}>
            <SkinTitle title='Наименование скина'/>
            <div className={styles.skin_container_wrapper}>
                {
                    shop.map(item => {
                        return <SkinItem
                            currentLevel={item.currentLevel}
                            id={item.shopItem.id}
                            itemType={item.itemType}
                            title={item.title}
                            key={item.shopItem.id}
                        />
                    })
                }
            </div>
        </div>
    )
}