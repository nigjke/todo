import { Alert, IconButton, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function TodoAlert({ setAlert, alert }) {
    const handleClose = () => {
        setAlert((prev) => {
            return { ...prev, open: false };
        });
    };

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            open={alert.open}
            onClose={handleClose}
            autoHideDuration={5000}
        >
            <Alert
                severity={alert.severity}
                action={
                    <IconButton aria-label="close" color="inherit" size="small" onClick={handleClose}>
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
                sx={{ mb: 2 }}
            >
                {alert.content}
            </Alert>
        </Snackbar>
    );
}
