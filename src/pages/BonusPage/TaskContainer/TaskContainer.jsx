import styles from './taskContainer.module.scss'
import { TaskItem } from './TaskItem/TaskItem'

export const TaskContainer = () => {
    return(
        <div className={styles.container}>
            <div className={styles.container_title}>
                Задания
            </div>
            <div className={styles.container_tasks_wrapper}>
                <TaskItem done={true}/>
                <TaskItem done={false}/>
                <TaskItem done={false}/>
                <TaskItem done={false}/>
                <TaskItem done={false}/>
                <TaskItem done={true}/>
                <TaskItem done={false}/>
                <TaskItem done={false}/>
                <TaskItem done={false}/>
                <TaskItem done={true}/>
                <TaskItem done={false}/>
            </div>
        </div>
    )
}