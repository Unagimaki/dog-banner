import { BalanceModule } from '../../modules/ModuleBalance/ModuleBalance'
import { FooterMenuModule } from '../../modules/ModuleFooterMenu/ModuleFooterMenu'
import styles from './bonusPage.module.scss'

const BonusPage = () => {
    return(
        <div className={styles.bonus_page}>
            <BalanceModule/>
            <FooterMenuModule/>
        </div>
    )
}

export default BonusPage