import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
   return (
      <Box mt='40px' bgcolor='#fff3f4'>
         <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
            <img src={Logo} alt='logo-footer' width='200px' height='40px' />
            <Typography variant='h5' pb='15px' mt='5px'>
               Made with ❤️ by JavaScript Mastery
            </Typography>
         </Stack>
      </Box>
   )
}

export default Footer
