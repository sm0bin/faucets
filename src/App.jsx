import React from 'react';
import Header from './components/Header';
import Marquee from 'react-fast-marquee';
import { Box, Typography } from '@mui/material';

const App = () => {
  return (
    <>
      <Header />

      <Box sx={{ bgcolor: "#9B1FE9", color: "#fff", py: 2 }}>
        <Marquee>
          Important Notice: This is a notice.
        </Marquee>
      </Box>

      <Box sx={{ bgcolor: "#fff", color: "#9B1FE9", py: 2 }}>
        <Typography variant="h1" align="center">Request testnet LINK</Typography>
      </Box>


    </>
  );
};

export default App;