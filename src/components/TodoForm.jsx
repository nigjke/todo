import { useState, useRef } from 'react';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoButton from './TodoButton';
import TodoItems from './TodoItems';
import TodoActions from './TodoActions';
import { Box } from '@mui/material';
import { v6 as uuidv6 } from 'uuid';

export default function TodoForm() {
    const inputValue = useRef('');
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        const taskTodo = {
            id: uuidv6(),
            text: inputValue.current,
            isReady: false,
        };
        let newTask = [taskTodo, ...tasks];
        setTasks(newTask);
    };

    console.log(tasks);
    return (
        <>
            <TodoHeader />
            <Box className="todoInput">
                <TodoInput inputRef={inputValue} />
                <TodoButton addTask={addTask} inputRef={inputValue} />
            </Box>
            <TodoItems setTasks={setTasks} tasks={tasks} />
            <TodoActions setTasks={setTasks} tasks={tasks} />
        </>
    );
}
