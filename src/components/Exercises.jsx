import { Box, Pagination, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ExerciseCard from './ExerciseCard'
import { exerciseOptions, fetchData } from '../utils/fetchData'

const Exercises = ({ exercises, bodyPart, setExercises }) => {
   const [currentPage, setCurrentPage] = useState(1) // состояние для смены страницы(пагинации)
   const exercisesPerPage = 9 // тут просто задаем переменную которая отпределяет сколько будет элементов на странице далее на нее будем делить все что приходит с API

   //это необходимо для пагинации
   const indexOfLastExercise = currentPage * exercisesPerPage
   const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
   const currentExercises = exercises.slice(
      indexOfFirstExercise,
      indexOfLastExercise
   ) /* тоесть мы отрезаем столько упражнений сколько нам необходимо чтобы 
   поместились натраницу напримр 1*9(столько упражнения у нас на странице) 
   это получаем последний индекс потом отнимем последний индекс от того чтолько
    всего у нас упражнений так получаем первый индекс после єтого на странице у нас будет 
    помещаеться ровно 9 упражнений*/

   //функция по перемещению страниц
   const paginate = (e, value) => {
      //value у нас берется из Material UI просто номер страницы
      setCurrentPage(value)
      //тут мыпросто настроили перемещение вверх после нажатия на кнопку страницы
      window.scrollTo({ top: 1800, behavior: 'smooth' })
   }

   //создаем запрос на получение упражнений по категориям
   useEffect(() => {
      const fetchExercisesData = async () => {
         let exercisesData = []
         if (bodyPart === 'all') {
            exercisesData = await fetchData(
               `https://exercisedb.p.rapidapi.com/exercises`,
               exerciseOptions
            )
         } else
            exercisesData = await fetchData(
               `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
               exerciseOptions
            )

         setExercises(exercisesData)
      }
      fetchExercisesData()
   }, [bodyPart])

   return (
      <Box
         id='exercises'
         sx={{
            mt: { lg: '110px' },
         }}
         mt='50px'
         p='20px'
      >
         <Typography variant='h3' mb='46px'>
            Showing Results
         </Typography>
         <Stack
            direction='row'
            sx={{ gap: { lg: '110px', xs: '50px' } }}
            flexWrap='wrap'
            justifyContent='center'
         >
            {/* тут передаем уже отрезанные уппражнения а не все сразу */}
            {currentExercises.map(exercise => (
               <ExerciseCard key={exercise.id} exercise={exercise} />
            ))}
         </Stack>
         {/* настраиваем простую пагинацию */}
         <Stack mt='100px' alignItems='center'>
            {exercises.length > 9 && (
               <Pagination
                  color='standard'
                  shape='rounded'
                  defaultPage={1}
                  // тут устанавливаем сколько будет карточек на странице делим на ту переменную которую мы задаливыше
                  count={Math.ceil(exercises.length / exercisesPerPage)}
                  //туту настраиваем переход по страницам
                  page={currentPage}
                  onChange={paginate}
                  size='large'
               />
            )}
         </Stack>
      </Box>
   )
}

export default Exercises
