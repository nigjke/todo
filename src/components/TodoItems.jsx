import { Box , FormControlLabel, Checkbox } from '@mui/material';
import * as React from 'react';
import '../styles/TodoItems.css';
import TodoForm from "./TodoForm";

export default function TodoItems({ tasks , id, setTasks}) {
    const toggleTask = (id) => {
        let toggle = tasks.map(e => e.id === id ? {...e , isReady : !e.isReady} : {...e})
        setTasks(toggle)
    }
    const taskTodoList = tasks.map(e => <FormControlLabel 
        control={<Checkbox onClick={()=>toggleTask(e.id)} checked={e.isReady} />} 
        label={e.text} 
        id={e.id} 
        style={e.isReady ? {textDecoration : "line-through"} : {textDecoration : "none"}}
        />)
    return(
        <Box className='TodoItems'>
            {taskTodoList}
        </Box>
    );
}