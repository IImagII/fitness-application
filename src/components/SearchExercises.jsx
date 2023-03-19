import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { fetchData, exerciseOptions } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'

const SearchExercises = ({
   setExercises,
   bodyPart,
   setBodyPart,
   isBodyParts,
}) => {
   const [search, setSearch] = useState('') //состояние для управляемого input (TextField)

   const [bodyParts, setBodyParts] = useState([]) // тут храниться все что пришло от API

   //будет при первой загрузке
   useEffect(() => {
      const fetchExercisesData = async () => {
         const bodyPartsData = await fetchData(
            'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
            exerciseOptions
         )

         setBodyParts(['all', ...bodyPartsData])
      }
      fetchExercisesData()
   }, [])

   //функция по реализации поиска
   const handleSearch = async () => {
      if (search) {
         const exercisesData = await fetchData(
            'https://exercisedb.p.rapidapi.com/exercises',
            exerciseOptions
         )

         //реализация самого поиска
         const searchedExercises = exercisesData.filter(
            exercise =>
               exercise.name.toLowerCase().includes(search) ||
               exercise.target.toLowerCase().includes(search) ||
               exercise.equipment.toLowerCase().includes(search) ||
               exercise.bodyPart.toLowerCase().includes(search)
         )
         //очищаем строку поиска
         setSearch('')

         //сюда помещаем что придет после поиска
         setExercises(searchedExercises)
      }
   }

   return (
      <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
         <Typography
            fontWeight={700}
            sx={{
               fontSize: {
                  lg: '44px',
                  xs: '30px',
               },
            }}
            mb='50px'
            textAlign='center'
         >
            Awesome Exercises You <br />
            Should Know
         </Typography>

         <Box position='relative' mb='72px'>
            {/* TextField - это равносильно использованию input */}
            <TextField
               height='76px'
               value={search}
               onChange={e => setSearch(e.target.value.toLowerCase())}
               placeholder='Search Exercises'
               type='text'
               sx={{
                  input: {
                     fontWeight: '700',
                     border: 'none',
                     borderRadius: '4px',
                  },
                  width: {
                     lg: '800px',
                     xs: '350px',
                  },
                  backgroundColor: '#fff',
                  borderRadius: '40px',
               }}
            />

            <Button
               className='search-btn'
               sx={{
                  bgcolor: '#ff2625',
                  color: '#fff',
                  textTransform: 'none',
                  width: {
                     lg: '175px',
                     xs: '100px',
                  },
                  fontSize: {
                     lg: '24px',
                     xs: '16px',
                  },
                  height: '56px',
                  position: 'absolute',
                  right: '0',
               }}
               onClick={handleSearch}
            >
               Search
            </Button>
         </Box>
         <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
            <HorizontalScrollbar
               data={bodyParts}
               bodyPart={bodyPart}
               setBodyPart={setBodyPart}
               isBodyParts
            />
         </Box>
      </Stack>
   )
}

export default SearchExercises
