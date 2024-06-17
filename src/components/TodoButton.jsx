import * as React from 'react';
import Button from '@mui/material/Button';
import '../styles/TodoInput.css';

export default function TodoButton({addTask}) {
    return(
        <Button className='todoButton_btn' onClick={addTask} variant="contained">Добавить</Button>
    );
}