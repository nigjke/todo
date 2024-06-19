import Button from '@mui/material/Button';
import '../styles/TodoInput.css';

export default function TodoButton({ addTask, inputRef }) {
    const isNone = () => (inputRef.current === '' ? alert('Внимание! Введите значение') : addTask());
    return (
        <Button className="todoButton_btn" onClick={isNone} variant="contained">
            Добавить
        </Button>
    );
}
