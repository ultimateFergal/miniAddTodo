import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddTodo from '../../components/AddTodo/AddTodo'
import TodoItem from '../../components/TodoItem/TodoItem'
import { addTask, completeTask, deleteTask } from '../../redux/actions'
import styles from './Main.style'

export class Main extends Component {
    render() {
        return (
            <div style={styles.appContainer}>
                <div style={styles.container}>
                    <h1 style={styles.title}>To do List</h1>
                    <div style={styles.inputWrapper}>
                        <AddTodo 
                            addTodo={(task) => this.props.addTodo(task)} 
                        />
                        <hr style={styles.separator}/>
                    </div>
                    <TodoItem />
                    {this.props.taskItems.length > 0 && this.props.taskItems.map((task) => {
                        console.log(this.props.taskItems, 'this.props.taskItems fdo')
                            return  (
                                <TodoItem
                                key={task.text}
                                task={task}         
                                deleteTodo={(task) => this.props.deleteTodo(task)} 
                                completeTodo={(task) => this.props.completeTodo(task)} />
                            )
                        }
                    )}
                </div>
            </div>
        )
    } 
}

const mapStateToProps = (state) => ({
    taskItems: state.taskItems
})

const mapDispatchToProps = (dispatch) => ({
    addTodo: (task) => dispatch(addTask(task)),
    deleteTodo: (task) => dispatch(deleteTask(task)),
    completeTodo: (task) => dispatch(completeTask(task))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
