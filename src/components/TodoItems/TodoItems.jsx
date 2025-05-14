import { FormControlLabel, Checkbox, Box } from '@mui/material';
import '../TodoItems/TodoItems.css';

export default function TodoItems({ tasks, setTasks }) {
    const toggleTask = (id) => {
        let toggle = tasks.map((e) => (e.id === id ? { ...e, isReady: !e.isReady } : { ...e }));
        setTasks(toggle);
    };
    const taskTodoList = tasks.map((e) => (
        <FormControlLabel
            control={<Checkbox onClick={() => toggleTask(e.id)} checked={e.isReady} />}
            label={e.text}
            id={e.id}
            key={e.id}
            style={e.isReady ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}
        />
    ));
    return <Box className="TodoItems">{taskTodoList}</Box>;
}
