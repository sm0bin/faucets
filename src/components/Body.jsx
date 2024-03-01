import { Box, Button, FormControl, Grid, TextField, Typography } from '@mui/material';
import WarningOutlinedIcon from '@mui/icons-material/WarningOutlined';
import ReCAPTCHA from "react-google-recaptcha";
import TabSection from './TabSection';

const Body = () => {
    function onChange(value) {
        console.log("Captcha value:", value);
    }

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

            <FormControl sx={{ mt: 2, width: 1 / 2, display: 'block' }}>

                <Grid container spacing={2}>

                    <Grid item xs={12}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#9B1FE9', mb: 1 }} >Wallet Address</Typography>
                        <TextField size='small' fullWidth placeholder='Your Wallet Address.' id="fullWidth" />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#9B1FE9', mb: 1 }} >Request Type</Typography>
                        <TextField size='small' fullWidth placeholder='20 Test Link' id="fullWidth" />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#9B1FE900', mb: 1 }} >Request Type</Typography>
                        <TextField size='small' fullWidth placeholder='0.5 ETH' id="fullWidth" />
                    </Grid>

                    <Grid item xs={12}>
                        <ReCAPTCHA
                            sitekey="6LdJIoUpAAAAAELrzz-d3U-zKJn4T0C9aku_szvX"
                            onChange={onChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" sx={{ bgcolor: '#9B1FE9', boxShadow: 0 }}>Send Request</Button>
                    </Grid>
                </Grid>
            </FormControl>


            <TabSection />
        </Box>
    );
};

export default Body;