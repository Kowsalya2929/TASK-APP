import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask as addTaskAction, deleteTask as deleteTaskAction, toggleTask as toggleTaskAction } from '../redux/tasksSlice'; 

function TaskDashboard() {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);

  const [newTask,setNewTask]= useState("");

  const addTask=()=>{
    if(newTask.trim()){
      dispatch(addTaskAction({ id: Date.now(), text: newTask, completed: false }));
      setNewTask("");
    }
  }
  const deleteTask=(id)=>{
    dispatch(deleteTaskAction(id));
  }
  const toggleTask=(id)=>{
    dispatch(toggleTaskAction(id));
  }
  return (
    <div>
        <h1>TASK APP</h1>
        <input type="text"
        value={newTask}
        onChange={(e)=> setNewTask(e.target.value)}
        placeholder="Add new task" />
        <button onClick={addTask}>ADD TASK</button>
        <ul>
            {tasks.map((task)=>(
                <li key={task.id}>
                    <span  style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
                    <button onClick={()=>{toggleTask(task.id)}}>{task.completed ? 'Undo' : 'Complete'}</button>
                    <button onClick={()=>{deleteTask(task.id)}}>DELETE</button>
                </li>
            ))}
        </ul>
    </div>
  )
};

export default TaskDashboard;

