import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import useLoadDataSecure from '../hooks/useLoadDataSecure';
import CircularProgress from '@mui/material/CircularProgress';


export default function Dashboard() {
    const [data, isPending, refetch, isError] = useLoadDataSecure('/users/all', 'all user');
    if (isPending) {
        return (
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '80vh',
            }}>
                <CircularProgress />
            </Box>
        )
    }

    if (isError) {
        return (
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '80vh',
            }}>
                <h1>Error fetching data</h1>
            </Box>
        )
    }

    return (
        <Box sx={{
            width: 1 / 2, mx: 'auto', minHeight: '80vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead >
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }} align="right">Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((user) => (
                            <TableRow
                                key={user._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell sx={{ borderRight: '1px solid #e0e0e0' }} component="th" scope="row">
                                    {user._id}
                                </TableCell>
                                <TableCell align="right">{user.email}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}