
import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { FormControl, InputLabel, Input, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { useAuth } from '../provider/AuthProvider';

const SignUp = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [emailError, setEmailError] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState(false);

    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        signup(data.email, data.password)
            .then(() => {
                toast.success('Sign Up successful!');
                navigate('/');
                window.location.reload(true);
            }).catch((error) => {
                console.error('Error signing up:', error);
                toast.error('Error signing up. Please try again.');
            });
    };

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


        // <Box>
        //     <form autoComplete="off" onSubmit={handleSubmit}>
        //         <h2>Login Form</h2>
        //         <TextField
        //             label="Email"
        //             onChange={e => setEmail(e.target.value)}
        //             required
        //             variant="outlined"
        //             color="secondary"
        //             type="email"
        //             sx={{ mb: 3 }}
        //             fullWidth
        //             value={email}
        //             error={emailError}
        //         />
        //         <TextField
        //             label="Password"
        //             onChange={e => setPassword(e.target.value)}
        //             required
        //             variant="outlined"
        //             color="secondary"
        //             type="password"
        //             value={password}
        //             error={passwordError}
        //             fullWidth
        //             sx={{ mb: 3 }}
        //         />
        //         <Button variant="outlined" color="secondary" type="submit">Login</Button>

        //     </form>
        //     <Typography variant="body2" sx={{ mt: 2 }}>
        //         Already have an account? <Link to="/login">Login</Link>
        //     </Typography>
        //     <Typography variant="body2" sx={{ mt: 2, fontWeight: 'bold' }}>
        //         Or
        //     </Typography>
        //     <IconButton aria-label="delete" size="medium">
        //         <FaGoogle />
        //     </IconButton>
        // </Box>
    );
};

export default SignUp;