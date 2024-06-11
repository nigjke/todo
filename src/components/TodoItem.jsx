import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import * as React from 'react';

export default function TodoItem() {
    return(
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
    );
}