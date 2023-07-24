import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
    <Box mt="80px" bgcolor="#FFF3F4">
        <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="14px">
        <img src={Logo} alt="logo" style={{ width: '100px', height: '21px' }} />
        </Stack>
        <Typography variant="h5" sx={{ fontSize: { lg: '18px', xs: '10px' } }} mt="21px" textAlign="center" pb="20px">made by Rowhittz ( ©️ : JSM )</Typography>
    </Box>
);

export default Footer;