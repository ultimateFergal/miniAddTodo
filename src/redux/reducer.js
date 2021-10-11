import { ADD_TASK, DELETE_TASK } from "./actions"

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
        default:
            return state
    }
}

export default taskReducer