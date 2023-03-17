import { Box } from '@mui/material'
import React, { useState } from 'react'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'

const Home = () => {
   const [exercises, setExercises] = useState([]) // состояние куда мы помещаем даннеы после поиска
   const [bodyPart, setBodyPart] = useState('all') // состяоние которое хранит выбор управжнения

   return (
      <Box>
         <HeroBanner />
         <SearchExercises
            setExercises={setExercises}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
         />
         <Exercises
            setExercises={setExercises}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
         />
      </Box>
   )
}

export default Home
