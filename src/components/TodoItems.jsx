import Box from "@mui/material/Box";
import TodoItem from "./TodoItem";
import * as React from 'react';
import '../styles/TodoItems.css';
import TodoForm from "./TodoForm";

export default function TodoItems({ todos }) {
    return(
        <Box className='TodoItems'>
            {todos.map((todo, index) => (
                <TodoItem key={index} todo={todo}/>
            ))}
        </Box>
    );
}