import React from 'react'

import { Box } from '@mui/material'

import './App.css'
import Home from './pages/Home'
import { ROUTES } from './utils/routes'
import NavBar from './components/NavBar'
import ExerciseDetail from './pages/ExerciseDetail'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'

const App = () => {
   return (
      // устанавливаем контейнер
      <Box width='400px' sx={{ width: { xl: '1488px' } }} m='auto'>
         <NavBar />
         <Routes>
            <Route index element={<Home />} />
            <Route path={ROUTES.EXERCISE} element={<ExerciseDetail />} />
         </Routes>
         <Footer />
      </Box>
   )
}

export default App
