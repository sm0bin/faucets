import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TableSection from './TableSection';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{
                    mt: 3
                }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function TabSection({ transactions, isPending, refetch, isError }) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', mt: 5 }}>
            <Box sx={{}}>
                <Tabs value={value}
                    sx={{ '& button.Mui-selected': { bgcolor: '#0000FF', color: "#fff" } }}
                    onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="ETH Transaction History" {...a11yProps(0)} />
                    <Tab label="TestLink Transaction History" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <TableSection />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <TableSection />
            </CustomTabPanel>
        </Box>
    );
}