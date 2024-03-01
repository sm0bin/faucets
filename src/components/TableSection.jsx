import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData(1, 159, 6.0, 24),
    createData(2, 237, 9.0, 37),
    createData(3, 262, 16.0, 24),
];

export default function TableSection() {
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
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
                        >
                            <TableCell sx={{ border: 1 }} align='center' component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell sx={{ border: 1 }} align="center">{row.calories}</TableCell>
                            <TableCell sx={{ border: 1 }} align="center">{row.fat}</TableCell>
                            <TableCell sx={{ border: 1 }} align="center">{row.carbs}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}