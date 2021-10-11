import { ADD_TASK, COMPLETE_TASK, DELETE_TASK } from "./actions"

const initialData ={
    taskItems: []
}

const taskReducer = (state = initialData, action) => {
    switch(action.type) {
        case ADD_TASK:
            return {
                ...state, 
                taskItems: [
                    ...state.taskItems,
                    {
                        text: action.payload, 
                        completed: false,
                    }
                ]
            }
        case DELETE_TASK:
            return {
                ...state, 
                taskItems: [...state.taskItems.filter((task) => task.text !== action.payload.text)]
            }   
        case COMPLETE_TASK:
            let updatedTaskItems = []
            state.taskItems.forEach((task) => {
                if (task.text === action.payload.text) {
                    task.completed = task.completed === true ? false : true
                }
                updatedTaskItems.push(task)
            })
            return {
                ...state, 
                taskItems: updatedTaskItems
            }                     
        default:
            return state
    }
}

export default taskReducer