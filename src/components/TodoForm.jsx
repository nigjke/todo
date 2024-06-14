import React, { useState } from 'react';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoButton from './TodoButton';
import TodoItems from './TodoItems';
import TodoActions from './TodoActions';
import { Box } from '@mui/material';

export default function TodoForm() {
    const [todos, setTodos] = useState([
        {
            text: 'fioewjfejoiw',
            isReady: true
        },
        {
            text: '2',
            isReady: false
        },
        {
            text: 'fioewjfejoiw',
            isReady: true
        },
    ])

    return (
        <>
            <TodoHeader/>
            <Box className='todoInput' >
                <TodoInput/>
                <TodoButton/>
            </Box>
            <TodoItems todos={todos}/>
            <TodoActions setTodos={setTodos} todos={todos}/>
        </>
    );
}