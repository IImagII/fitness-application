import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData'
import { Box } from '@mui/material'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetail = () => {
   const { id } = useParams()
   const [exerciseDetail, setExerciseDetail] = useState({}) // состояние которое содержит упражнения из первого запроса на API
   const [exerciseVideos, setExerciseVideos] = useState([]) // тут содержиться состояние из второго видео запроса на API
   const [exercisesTarget, setExercisesTarget] = useState([]) // состояние для третьего коммпонента exerciseTarge
   const [exerciseEquipment, setExerciseEquipment] = useState([])

   //функция по получению конкретного упражнения при клике на него
   useEffect(() => {
      const fetchExercisesData = async () => {
         /*===================================*/

         //формируем url запросов у нас их будет несколько это первые запрос
         const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
         const youtubeSearchUrl =
            'https://youtube-search-and-download.p.rapidapi.com'

         //тут уже жедаем запрос на само получение данных
         const exerciseDetailData = await fetchData(
            `${exerciseDbUrl}/exercises/exercise/${id}`,
            exerciseOptions
         )

         setExerciseDetail(exerciseDetailData)

         //формируем функцию для другго запроса на видео APi
         const fetchYoutubeData = await fetchData(
            `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
            youtubeOptions
         )

         setExerciseVideos(fetchYoutubeData.contents)

         //формируем запрос на третий омпонент target
         const targetMuscleExerciseData = await fetchData(
            `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
            exerciseOptions
         )
         setExercisesTarget(targetMuscleExerciseData)

         //формируем запрос на третий омпонент equipment
         const equipmentExerciseData = await fetchData(
            `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
            exerciseOptions
         )
         setExerciseEquipment(equipmentExerciseData)
      }
      fetchExercisesData()
   }, [id])

   return (
      <Box>
         <Detail exerciseDetail={exerciseDetail} />
         <ExerciseVideos
            exerciseVideos={exerciseVideos}
            name={exerciseDetail.name}
         />
         <SimilarExercises
            exercisesTarget={exercisesTarget}
            exerciseEquipment={exerciseEquipment}
         />
      </Box>
   )
}

export default ExerciseDetail
