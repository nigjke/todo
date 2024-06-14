import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import '../styles/TodoActions.css';

export default function TodoActions() {
    return(
        <>
            <Box className='actionsBox'> 
                <Typography variant="subtitle1">Завершено</Typography>
                <Button id ='actionBtn' variant="text">Очистить</Button>
            </Box>
        </>
    )
}