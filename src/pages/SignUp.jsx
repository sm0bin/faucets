
import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { FormControl, InputLabel, Input, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";

const SignUp = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Box sx={{
            bgcolor: '#EEF2FE', minHeight: '80vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            {/* <TextField
                id="standard-number"
                label="Number"
                type="text"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="standard"
            /> */}
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    bgcolor: '#fff',
                    borderRadius: '4px',
                    boxShadow: 1,
                    p: 4,
                    mx: 'auto',
                    width: 1 / 3,
                }}
                noValidate
                autoComplete="off"
            >
                <Typography variant="h4" align="center" sx={{ mb: 2, fontWeight: 'bold' }}>
                    Sign Up
                </Typography>

                <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                    // endAdornment={
                    // <InputAdornment position="end">
                    //     <IconButton
                    //         aria-label="toggle password visibility"
                    //         onClick={handleClickShowPassword}
                    //         // onMouseDown={handleMouseDownPassword}
                    //     >
                    //         {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                    //     </IconButton>
                    // </InputAdornment>
                    // }
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Button sx={
                    {
                        width: '100%',
                        mt: 2,
                        bgcolor: '#9B1FE9',
                        '&:hover': { bgcolor: '#9B1FE9' }
                    }
                } variant="contained">Login</Button>
                <Typography variant="body2" sx={{ mt: 2 }}>
                    Already have an account? <Link to="/login">Login</Link>
                </Typography>
                <Typography variant="body2" sx={{ mt: 2, fontWeight: 'bold' }}>
                    Or
                </Typography>
                <IconButton aria-label="delete" size="medium">
                    <FaGoogle />
                </IconButton>
            </Box>


        </Box>
    );
};

export default SignUp;