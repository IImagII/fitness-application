import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import { Box } from '@mui/material'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetail = () => {
   const { id } = useParams()
   const [exerciseDetail, setExerciseDetail] = useState({})

   //функция по получению конкретного упражнения при клике на него
   useEffect(() => {
      const fetchExercisesData = async () => {
         //формируем url запросов у нас их будет несколько
         const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
         const youtubeSearchUrl =
            'https://youtube-search-and-download.p.rapidapi.com'

         //тут уже жедаем запрос на само получение данных
         const exerciseDetailData = await fetchData(
            `${exerciseDbUrl}/exercises/${id}`,
            exerciseOptions
         )
         setExerciseDetail(exerciseDetailData)
      }
      fetchExercisesData()
   }, [id])

   return (
      <Box>
         <Detail exerciseDetail={exerciseDetail} />
         <ExerciseVideos />
         <SimilarExercises />
      </Box>
   )
}

export default ExerciseDetail
