import { Box, FormControl, Grid, TextField, Typography } from '@mui/material';
import WarningOutlinedIcon from '@mui/icons-material/WarningOutlined';

const Body = () => {
    return (
        <Box sx={{ bgcolor: "#fff", p: 2, mx: 10 }}>
            <Box sx={{ bgcolor: '#EEF2FE', display: 'flex', p: 1 }}>
                <WarningOutlinedIcon sx={{ color: "#9B1FE9", mr: 1 }} />
                <Typography variant="body1" sx={{ fontWeight: 400, color: '#444' }} >
                    Your wallet is connected to
                    <Box component='span' sx={{ fontWeight: 'bold' }}> POA Network Sokol</Box>, so you are requesting
                    <Box component='span' sx={{ fontWeight: 'bold' }}> POA Network Sokol</Box> Link/ETH.
                </Typography>
            </Box>

            <FormControl sx={{ mt: 2, width: 1 / 2 }}>

                <Grid container spacing={2}>

                    <Grid item xs={12}>
                        <TextField size='small' fullWidth placeholder='Your Wallet Address.' id="fullWidth" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField size='small' fullWidth placeholder='Your Wallet Address.' id="fullWidth" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField size='small' fullWidth placeholder='Your Wallet Address.' id="fullWidth" />
                    </Grid>
                </Grid>
            </FormControl>
        </Box>
    );
};

export default Body;