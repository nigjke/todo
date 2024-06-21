import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import '../TodoInput/TodoInput.css';

export default function TodoInput(props) {
    const { inputRef } = props;
    const [todo, setTodo] = useState('');

    const changeInputValue = (value) => {
        setTodo(value);
        inputRef.current = value;
    };

    useEffect(() => {
        if (inputRef.current === '') {
            setTodo('');
        }
    }, [inputRef.current]);

    return (
        <TextField
            id="outlined-basic"
            className="todoInput_text"
            value={todo}
            label="Добавить новый элемент"
            variant="outlined"
            onChange={(e) => changeInputValue(e.target.value)}
        />
    );
}
