
import React from 'react';
import { Box, Typography } from '@mui/material';
import Body from '../components/Body';
import Marquee from 'react-fast-marquee';


const Home = () => {
    return (
        <>
            {/* Notice Section */}
            <Box sx={{ bgcolor: "#9B1FE9", color: "#fff", py: 3 }}>
                <Marquee>
                    Important Notice: This is a notice.
                </Marquee>
            </Box>

            {/* Body */}
            <Box sx={{ bgcolor: "#EEF2FE", minHeight: '80vh', p: 2 }}>

                <Box sx={{ py: 4, mx: 10 }}>
                    <Typography variant="h2" sx={{ fontWeight: 500, mb: 1, color: "#9B1FE9" }} >Request testnet LINK</Typography>

                    <Typography variant="body1" sx={{ fontWeight: 400, maxWidth: 1 / 2, color: '#444' }} >Get testnet LINK for an account on one of the supported blockchain testnets so you can create and test your own oracle and Chainlinked smart contract</Typography>
                </Box>


                <Body />


            </Box>

        </>
    );
};

export default Home;