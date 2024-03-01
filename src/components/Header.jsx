import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined';
import { FormControl, Grid } from '@mui/material';
import { Select } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MetaMask from '../assets/MetaMask.png';
import WalletConnect from '../assets/WalletConnect.png';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import DialogActions from '@mui/material/DialogActions';
import { Link, useNavigate } from 'react-router-dom';


// const pages = ['Products', 'Pricing', 'Blog'];
// Arbitrum Rinkeby
// Avalanche Fuji
// BNB Chain Testnet
// Ethereum Rinkeby
// Fantom Testnet
// Harmony Testnet
// POA Network Sokol
// Polygon Mumbai


function Header() {
    // const [anchorElNav, setAnchorElNav] = useState(null);
    const [chain, setChain] = React.useState('');
    const settingsLoggedIn = ['Profile', 'Account', 'Dashboard', 'Logout'];
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const navigate = useNavigate();
    const settingsLoggedOut = [
        {
            id: 1,
            name: 'Log In',
            link: '/login'
        },
        {
            id: 2,
            name: 'Sign Up',
            link: '/signup'
        },
        {
            id: 3,
            name: 'FAQ',
            link: '/faq'
        }
    ];
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const chains = [
        {
            id: 1,
            icon: '🏀',
            name: 'Arbitrum Rinkeby'
        },
        {
            id: 2,
            icon: '🏈',
            name: 'Avalanche Fuji'
        },
        {
            id: 3,
            icon: '🎾',
            name: 'BNB Chain Testnet'
        },
        {
            id: 4,
            icon: '🏐',
            name: 'Ethereum Rinkeby'
        },
        {
            id: 5,
            icon: '🏉',
            name: 'Fantom Testnet'
        },
        {
            id: 6,
            icon: '🏓',
            name: 'Harmony Testnet'
        },
        {
            id: 7,
            icon: '🏒',
            name: 'POA Network Sokol'
        },
        {
            id: 8,
            icon: '🏑',
            name: 'Polygon Mumbai'
        },

    ]

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        setChain(event.target.value);
    };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = (link) => {
        navigate(link);
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{
            backgroundColor: '#fff',
            color: '#9B1FE9',
            boxShadow: 'none',
            px: { lg: 8 }
        }}>
            <Container maxWidth="xl"
                sx={{ px: 0 }}
            >
                <Toolbar disableGutters>

                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            flexGrow: 1,
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'sans-serif',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <Link to='/'>Faucets</Link>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        {/* <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu> */}
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'sans-serif',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <Link to='/'>Faucets</Link>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' } }}>

                        <FormControl sx={{ m: 2, minWidth: 120 }}>
                            <Select
                                value={chain}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                sx={{ color: '#9B1FE9' }}
                            >
                                <MenuItem value="" hidden>
                                    🏀 Arbitrum Rinkeby
                                </MenuItem>

                                {chains.map((coin) => (
                                    <MenuItem key={coin.id} value={coin.id}>{coin.icon}{` ${coin.name}`}</MenuItem>
                                ))}
                            </Select>
                            {/* <FormHelperText>Without label</FormHelperText> */}
                        </FormControl>

                        <Button onClick={handleClickOpen} variant="outlined" size="small" sx={{ my: 2, color: 'inherit' }} startIcon={<WalletOutlinedIcon />}>
                            Connect Wallet
                        </Button>
                        {/* {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))} */}
                    </Box>

                    <Box sx={{
                        flexGrow: 0, my: 2
                    }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 2 }}>
                                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                                <AccountCircleOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'inherit' }} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settingsLoggedOut.map((setting) => (
                                <MenuItem key={setting.id} onClick={() => handleCloseUserMenu(setting.link)}>
                                    <Typography textAlign="center">{setting.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>

            {/* Dialog tab */}
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Connect your wallet"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Box sx={{ bgcolor: '#F5F7FD' }}>
                                    <img src={MetaMask} className='w-50 mx-auto d-block' />
                                    {/* <Box src={MetaMask} sx={{ width: '100%' }} /> */}
                                    <Typography sx={{ fontWeight: 'bold', textAlign: 'center', color: '#9B1FE9', fontSize: 20 }}> MetaMask</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box sx={{ bgcolor: '#F5F7FD' }}>
                                    <img src={WalletConnect} className='w-50 mx-auto d-block' />
                                    {/* <Box src={MetaMask} sx={{ width: '100%' }} /> */}
                                    <Typography sx={{ fontWeight: 'bold', textAlign: 'center', color: '#9B1FE9', fontSize: 20 }}> MetaMask</Typography>
                                </Box>
                                {/* <Button>
                                    <img src={WalletConnect} className='w-100' />
                                </Button> */}
                            </Grid>
                        </Grid>

                        {/* <Box sx={{ display: 'grid', gap: 2 }}>
                        </Box> */}
                    </DialogContentText>
                </DialogContent>
                {/* <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Disagree
                    </Button>
                    <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions> */}
            </Dialog>
        </AppBar>
    );
}
export default Header;