import * as React from 'react';
import TextField from '@mui/material/TextField';
import '../styles/TodoInput.css';

export default function TodoInput() {
    return(
        <TextField id="outlined-basic" className='todoInput_text' label="Добавить новый элемент" variant="outlined"/>
    );
}