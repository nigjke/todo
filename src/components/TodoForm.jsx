import React from 'react';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoButton from './TodoButton';
import TodoItems from './TodoItems';
import TodoActions from './TodoActions';
import { Box } from '@mui/material';

export default function TodoForm() {
    return (
        <>
            <TodoHeader/>
            <Box className='todoInput' >
                <TodoInput/>
                <TodoButton/>
            </Box>
            <TodoItems/>
            <TodoActions/>
        </>
    );
}