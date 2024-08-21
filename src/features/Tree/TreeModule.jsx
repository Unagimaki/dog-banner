import { useNavigate } from 'react-router-dom';
import styles from './treeModule.module.scss'

export const TreeModule = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/game")
    }

    return(
        <div onClick={handleClick} className={styles.tree}/>
    )
}