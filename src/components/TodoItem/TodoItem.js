import React from 'react'
import styles from './TodoItem.styles'


export default function TodoItem({ task, deleteTodo, completeTodo }) {
    console.log(task, 'deleteTodo fdo')
    return (
        <div style={styles.taskContainer}>
            {task && 
                <div style={styles.taskWrapper} >                
                    <p
                        style={{
                            ...styles.task, 
                            textDecoration: task.completed ? 'line-through': 'none'
                        }}>
                        {task?.text}
                    </p>
                    <div style={styles.iconsWrapper}>
                        <i 
                            className="fas fa-check-circle"
                            style={styles.completedIcon}
                            onClick={() => completeTodo(task)}></i>
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
