import { Box, Button, FormControl, Grid, TextField, Typography } from '@mui/material';
import WarningOutlinedIcon from '@mui/icons-material/WarningOutlined';
import ReCAPTCHA from "react-google-recaptcha";
import TabSection from './TabSection';
import { useState } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { toast } from 'react-hot-toast';
import useLoadDataSecure from '../hooks/useLoadDataSecure';

const Body = () => {
    const [verfied, setVerifed] = useState(false);
    // const [transactions, isPending, refetch, isError] = useLoadDataSecure('/transactions', 'all transactions');
    const axiosSecure = useAxiosSecure();

    // if (isPending) {
    //     return (
    //         <div>Loading...</div>
    //     )
    // }

    // if (isError) {
    //     return (
    //         <div>Error fetching data</div>
    //     )
    // }

    function onChange(value) {
        setVerifed(true);
    }

    const handleRequest = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        const requestData = {
            walletAddress: data.walletAddress,
            request: {
                time: new Date().toLocaleString(),
                hash: '0x1234567890',
                type: data.type,
                amount: data.amount,
                currency: 'ETH',
            }
        }

        axiosSecure.post('/transactions', requestData)
            .then((res) => {
                toast.success('Request sent successfully!');
                // refetch();
                console.log(res.data);
            }).catch((error) => {
                toast.error('Error sending request. Please try again.');
                console.error('Error sending request:', error);
            });
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

            <Box onSubmit={handleRequest} component='form' sx={{ mt: 2, width: 1 / 2, display: 'block' }}>

                <Grid container spacing={2}>

                    <Grid item xs={12}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#9B1FE9', mb: 1 }} >Wallet Address</Typography>
                        <TextField name='walletAddress' size='small' fullWidth required placeholder='Your Wallet Address.' id="wallet-address" />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#9B1FE9', mb: 1 }} >Request Type</Typography>
                        <TextField name='type' size='small' fullWidth required placeholder='20 Test Link' id="type" />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#9B1FE900', mb: 1 }} >Request Type</Typography>
                        <TextField name='amount' size='small' fullWidth required placeholder='0.5 ETH' id="amount" />
                    </Grid>

                    <Grid item xs={12}>
                        <ReCAPTCHA
                            sitekey="6LdJIoUpAAAAAELrzz-d3U-zKJn4T0C9aku_szvX"
                            onChange={onChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained"
                            sx={{
                                bgcolor: '#9B1FE9',
                                boxShadow: 0,
                                '&:hover': { bgcolor: '#9B1FE9' }
                            }}
                            type='submit'
                            disabled={!verfied}
                        >Send Request</Button>
                    </Grid>
                </Grid>
            </Box>


            <TabSection />
        </Box>
    );
};

export default Body;