import * as React from 'react';
import Button from '@mui/material/Button';
import '../styles/TodoInput.css';

export default function TodoButton({ addTask, todo }) {
    const isNone = () => (todo == '' ? alert('Внимание! Введите значение') : addTask());
    return (
        <Button className="todoButton_btn" onClick={isNone} variant="contained">
            Добавить
        </Button>
    );
}
