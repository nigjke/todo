import Box from "@mui/material/Box";
import TodoItem from "./TodoItem";
import * as React from 'react';
import '../styles/TodoItems.css';

export default function TodoItems() {
    return(
        <Box className='TodoItems'>
            <TodoItem/>
        </Box>
    );
}