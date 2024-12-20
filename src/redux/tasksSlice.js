import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    tasks:[],
}

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers:{
        addTask(state,action){
            state.tasks.push(action.payload)
        },
        editTask(state,action){
            const {id,title,description,dueDate}= action.payload;
            const task = state.tasks.find((task)=>task.id === id)
            if(task){
                task.title=title;
                task.description=description;
                task.dueDate=dueDate;
            }
        },
        deleteTask(state,action){
            state.tasks=state.tasks.filter((task) => task.id !== action.payload)
        },
        toggleTask(state,action){
            const task = state.tasks.find((task) => task.id === action.payload)
            if (task) task.completed = !task.completed;
        },
    },
});

export const { addTask,deleteTask,editTask,toggleTask } = tasksSlice.actions;

export default tasksSlice.reducer;