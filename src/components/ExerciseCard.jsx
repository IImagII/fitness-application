import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'

const ExerciseCard = ({ exercise }) => {
   const { id, name, bodyPart, gifUrl, target } = exercise

   return (
      <Link to={`/exercise/${id}`} className='exercise-card'>
         {/* loading='lazy' - это отложеная загрузка изображений */}
         <img src={gifUrl} alt={name} loading='lazy' />

         <Stack direction='row'>
            <Button
               sx={{
                  ml: '21px',
                  color: '#fff',
                  background: '#FFA9A9',
                  fontSize: '14px',
                  borderRadius: '20px',
                  textTransform: 'capitalize',
               }}
            >
               {bodyPart}
            </Button>
            <Button
               sx={{
                  ml: '21px',
                  color: '#fff',
                  background: '#FCC757',
                  fontSize: '14px',
                  borderRadius: '20px',
                  textTransform: 'capitalize',
               }}
            >
               {target}
            </Button>
         </Stack>
         <Typography
            ml='21px'
            color='#000'
            fontWeight='bold'
            mt='11px'
            pb='10px'
            textTransform='capitalize'
         >
            {name}
         </Typography>
      </Link>
   )
}

export default ExerciseCard
