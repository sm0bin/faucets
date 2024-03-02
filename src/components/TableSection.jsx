import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useLoadDataSecure from '../hooks/useLoadDataSecure';


export default function TableSection() {
    const [transactions, isPending, refetch, isError] = useLoadDataSecure('/transactions/all', 'all transactions');
    if (isPending) {
        return (
            <div>Loading...</div>
        )
    }
    if (isError) {
        return (
            <div>Error fetching data</div>
        )
    }
    return (
        <TableContainer component={Paper} sx={{ width: 1 / 3, borderRadius: 0, boxShadow: 0, border: '#555' }}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    {/* Sr	Time	Amount	Hash */}
                    <TableRow sx={{ fontWeight: 'bold' }}>
                        <TableCell sx={{ border: 1 }} align='center'>Sr</TableCell>
                        <TableCell sx={{ border: 1 }} align='center'>Time</TableCell>
                        <TableCell sx={{ border: 1 }} align="center">Amount</TableCell>
                        <TableCell sx={{ border: 1 }} align="center">Hash</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        transactions.map((transaction, index) => (
                            <TableRow
                                key={transaction._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell sx={{ border: 1 }} align='center'>{index + 1}</TableCell>
                                <TableCell sx={{ border: 1 }} align='center'>{transaction.time}</TableCell>
                                <TableCell sx={{ border: 1 }} align="center">{transaction.amount}</TableCell>
                                <TableCell sx={{ border: 1 }} align="center">{transaction.hash}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}