import { StatCount } from './StatCount/StatCount'
import { StatList } from './StatList/StatList'
import styles from './statPage.module.scss'
import { StatTitle } from './StatTitle/StatTitle'

const StatPage = () => {
    const background = require('../../assets/images/background.png')
    return(
        <div className={styles.stat_page}>
            <img className={styles.stat_page_background} src={background} alt='img'/>
            <StatTitle/>
            <StatCount/>
            <StatList/>
        </div>
    )
}
export default StatPage