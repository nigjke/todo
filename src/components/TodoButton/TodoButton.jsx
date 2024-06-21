import Button from '@mui/material/Button';
import '../TodoInput/TodoInput.css';
import TodoAlert from '../TodoAlert/TodoAlert';

export default function TodoButton({ addTask, inputRef }) {
    const isNone = () => (inputRef.current === '' ? alert(1) : addTask());
    return (
        <Button className="todoButton_btn" onClick={isNone} variant="contained">
            Добавить
            <TodoAlert />
        </Button>
    );
}
