import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TodoForm from '../components/TodoForm';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Todo() {
    return (
        <> 
            <CssBaseline />
            <Grid>
                <Grid item xs={6} md={8}>
                    <Item>
                        <Box sx={{ bgcolor: '#cfe8fc', height: '70vh',}}>
                            <TodoForm />
                        </Box>
                    </Item>
                </Grid>
            </Grid>
        </>  
    );
}