import React from 'react'
import { Stack } from '@mui/material'
import Logo from '../assets/images/Logo.png'
import { Link, Routes } from 'react-router-dom'
import { ROUTES } from '../utils/routes'

const NavBar = () => {
   return (
      <Stack
         direction='row'
         justifyContent='space-between'
         //тут мыпрописываем сразу с указанием адаптивной разметки указывая параметры как объект
         sx={{
            gap: {
               sm: '122px',
               xs: '40px',
            },
            mt: { sm: '32px', xs: '20px' },
            justifyContent: 'none',
         }}
         px='20px' // так указывается padding по оси x то есть повсей горизонтали
      >
         <Link to={ROUTES.HOME}>
            <img
               src={Logo}
               alt='logo'
               style={{
                  width: '48px',
                  height: '48px',
                  margin: '0 20px',
               }}
            />
         </Link>
         <Stack
            direction='row'
            gap='40px'
            fontSize='24px'
            alignItems='flex-end'
         >
            <Link
               to={ROUTES.HOME}
               style={{
                  textDecoration: 'none',
                  color: '#3a1212',
                  borderBottom: '3px solid #ff2625',
               }}
            >
               Home
            </Link>
            <a
               href='#exercises'
               style={{ textDecoration: 'none', color: '#3a1212' }}
            >
               Exercises
            </a>
         </Stack>
      </Stack>
   )
}

export default NavBar
