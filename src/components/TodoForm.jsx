import React, { useState } from 'react';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoButton from './TodoButton';
import TodoItems from './TodoItems';
import TodoActions from './TodoActions';
import { Box } from '@mui/material';

export default function TodoForm() {
    const [todo,setTodo] = useState('')
    const [tasks,setTasks] = useState([])

    const addTask = () => {
        const taskTodo = {
            id : Math.random,
            text : todo,
            isReady : false,
        }
        let newTask = [taskTodo, ...tasks]
        setTasks(newTask)
        setTodo('')
    }
console.log(tasks)
    return (
        <>
            <TodoHeader/>
            <Box className='todoInput' >
                <TodoInput todo={todo} setTodo={setTodo}/>
                <TodoButton addTask={addTask} />
            </Box>
            <TodoItems setTasks={setTasks} tasks={tasks}/>
            <TodoActions setTasks={setTasks} tasks={tasks}/>
        </>
    );
}