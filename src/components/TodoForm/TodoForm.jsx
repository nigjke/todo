import { useState, useRef } from 'react';
import TodoHeader from '../TodoHeader/TodoHeader';
import TodoInput from '../TodoInput/TodoInput';
import TodoButton from '../TodoButton/TodoButton';
import TodoItems from '../TodoItems/TodoItems';
import TodoActions from '../TodoActions/TodoActions';
import TodoAlert from '../TodoAlert/TodoAlert';
import { Box } from '@mui/material';
import { v6 as uuidv6 } from 'uuid';

export default function TodoForm() {
    const inputValue = useRef('');

    const [tasks, setTasks] = useState([]);
    const [alert, setAlert] = useState({
        content: '',
        open: false,
        severity: 'success',
    });

    const addTask = () => {
        if (inputValue.current === '') {
            setAlert({
                open: true,
                content: 'The input value is empty!',
                severity: 'warning',
            });
            return;
        }

        const taskTodo = {
            id: uuidv6(),
            text: inputValue.current,
            isReady: false,
        };
        const newTask = [taskTodo, ...tasks];
        setTasks(newTask);
        inputValue.current = '';

        setAlert({
            open: true,
            content: 'The record was successfully created!',
            severity: 'success',
        });
    };

    return (
        <>
            <TodoHeader />
            <Box className="todoInput">
                <TodoInput inputRef={inputValue} />
                <TodoButton addTask={addTask} />
            </Box>
            <TodoItems setTasks={setTasks} tasks={tasks} />
            <TodoActions setTasks={setTasks} tasks={tasks} setAlert={setAlert} />
            <TodoAlert setAlert={setAlert} alert={alert} />
        </>
    );
}
