import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';


const App = () => {
  return (
    <>
      <Header />
      <Box sx={{ minHeight: '80vh' }} >
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default App;