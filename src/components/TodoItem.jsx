import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import * as React from 'react';

export default function TodoItem({ todo }) {
    return <FormControlLabel control={<Checkbox checked={todo.isReady} />} label={todo.value} />;
}
