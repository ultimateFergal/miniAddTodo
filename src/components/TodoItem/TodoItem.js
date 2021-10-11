import React from 'react'
import styles from './TodoItem.styles'


export default function TodoItem({ task, deleteTodo }) {
    console.log(task, 'deleteTodo fdo')
    return (
        <div style={styles.taskContainer}>
            {task && 
                <div style={styles.taskWrapper} >                
                    <p style={styles.task}>{task?.text}</p>
                    <div style={styles.iconsWrapper}>
                        <i className="fas fa-check-circle" style={styles.completedIcon}></i>
                        <i 
                            className="fas fa-trash-alt"
                            style={styles.deleteIcon}
                            onClick={() => deleteTodo(task)}></i>
                    </div>
                </div>
            }
        </div>
    )
}
