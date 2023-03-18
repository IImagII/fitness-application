import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import { Box } from '@mui/material'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetail = () => {
   const { id } = useParams()

   //функция по получению конкретного упражнения при клике на него
   useEffect(() => {
      const fetchExercisesData = async () => {
         const bodyPartsData = await fetchData(
            `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
            exerciseOptions
         )
         console.log('bodyPartsData :>> ', bodyPartsData)
      }
      fetchExercisesData()
   }, [id])

   return (
      <Box>
         <Detail />
         <ExerciseVideos />
         <SimilarExercises />
      </Box>
   )
}

export default ExerciseDetail
