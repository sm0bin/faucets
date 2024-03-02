
import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { FormControl, InputLabel, Input, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { useAuth } from '../provider/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [emailError, setEmailError] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState(false);


    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        // console.log(data);
        // console.log(email, password);
        login(data.email, data.password)
            .then(() => {
                toast.success('Login successful!');
                navigate('/');
                window.location.reload(true);
            }).catch((error) => {
                console.error('Error Logging in:', error);
                toast.error('Error Logging in. Please try again.');
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
            <Box

                sx={{
                    '& .MuiTextField-root': { m: 1, width: '100%' },
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
                    Login
                </Typography>


                <form component="form" onSubmit={handleSubmit}>
                    <TextField
                        label="Email"
                        type='email'
                        name='email'
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        error={emailError}
                        variant="standard"
                        fullWidth
                        required
                    />
                    <TextField
                        label="Password"
                        name='password'
                        id="password"
                        value={password}
                        error={passwordError}
                        onChange={e => setPassword(e.target.value)}
                        type={showPassword ? 'text' : 'password'}
                        variant="standard"
                        fullWidth
                        required
                        InputProps={{
                            endAdornment: (
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            ),
                        }}
                    />
                    <Button sx={{
                        width: '100%',
                        mt: 2,
                        bgcolor: '#9B1FE9',
                        '&:hover': { bgcolor: '#9B1FE9' }
                    }}
                        variant="contained"
                        type="submit"
                    >Login</Button>
                </form>

                <Typography variant="body2" sx={{ mt: 2 }}>
                    Already have an account? <Link to="/signup">Sign Up</Link>
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

export default Login;