import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import '../styles/TodoActions.css';
import { useEffect, useState, useMemo } from 'react';

export default function TodoActions({todos, setTodos }) {

    const [filteredTodos, setFilteredTodos] = useState([])

    useEffect(() => {
        setFilteredTodos(todos.filter((todo) => todo.isReady))
    }, [todos])

    const Clear = () => {
        setTodos([]);
    }

    return(
        <>
            <Box className='actionsBox'> 
                <Typography variant="subtitle1">Завершено {filteredTodos.length}/{todos.length}</Typography>
                <Button id ='actionBtn' onClick={Clear} variant="text">Очистить</Button>
            </Box>
        </>
    )
}