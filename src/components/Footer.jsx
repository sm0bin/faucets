import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: "#fff", color: "#9B1FE9", py: 3 }}>
            <Typography align='center' variant="body1" sx={{ fontWeight: 400, color: '#444' }} >© Copyright 2022 - All Right Reserved by Faucet</Typography>
        </Box>
    );
};

export default Footer;