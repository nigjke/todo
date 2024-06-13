import * as React from 'react';
import { Typography } from '@mui/material';
import '../styles/TodoHeader.css';

export default function TodoHeader() {
    return (
        <Typography className='todoHeader' variant="h1" component="h2">
              Дневной список дел
        </Typography>
    )
}