import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../TodoActions/TodoActions.css';
import { useEffect, useState } from 'react';

export default function TodoActions({ tasks, setTasks, setAlert }) {
    const [filteredTasks, setFilteredTasks] = useState([]);

    useEffect(() => {
        setFilteredTasks(tasks.filter((taskTodo) => taskTodo.isReady));
    }, [tasks]);

    const Clear = () => {
        setTasks([]);
        setAlert({
            open: true,
            content: 'Todo is clear!',
            severity: 'success',
        });
    };

    return (
        <>
            <Box className="actionsBox">
                <Typography variant="subtitle1">
                    Завершено {filteredTasks.length}/{tasks.length}
                </Typography>
                <Button id="actionBtn" onClick={Clear} variant="text">
                    Очистить
                </Button>
            </Box>
        </>
    );
}
