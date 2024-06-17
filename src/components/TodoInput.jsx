import * as React from 'react';
import TextField from '@mui/material/TextField';
import '../styles/TodoInput.css';
import { useState } from 'react';

export default function TodoInput({todo,setTodo}) {
    const [value, setValue] = useState('');

    const handleChangeValue = (e) => {
        setValue(e.target.value)
    }
     return(
        <TextField 
            id="outlined-basic" 
            className='todoInput_text' 
            value={todo} 
            label="Добавить новый элемент" 
            variant="outlined"
            onChange={(e)=> setTodo(e.target.value)}
        />
    );
}