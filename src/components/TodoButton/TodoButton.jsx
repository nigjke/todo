import Button from '@mui/material/Button';
import '../TodoInput/TodoInput.css';

export default function TodoButton({ addTask, inputRef }) {
    const isNone = () => (inputRef.current === '' ? alert('Hello') : addTask());
    return (
        <Button className="todoButton_btn" onClick={isNone} variant="contained">
            Добавить
        </Button>
    );
}
