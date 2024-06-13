import * as React from 'react';
import Button from '@mui/material/Button';
import '../styles/TodoInput.css';

export default function TodoButton() {
    return(
        <Button className='todoButton_btn' variant="contained">Добавить</Button>
    );
}