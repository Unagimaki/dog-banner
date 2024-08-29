import styles from './statPage.module.scss'
import { StatTitle } from './components/StatTitle/StatTitle'
import { StatCount } from './components/StatCount/StatCount'
import { StatList } from './components/StatList/StatList'

const StatPage = () => {

    return(
        <div className={styles.stat_page}>
            <StatTitle/>
            <StatCount/>
            <StatList/>
        </div>
    )
}
export default StatPage