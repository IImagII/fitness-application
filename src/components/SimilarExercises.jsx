import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({ exercisesTarget, exerciseEquipment }) => {
   return (
      <Box sx={{ mt: { lg: '100px', xs: '0' } }}>
         <Typography variant='h3' mb={2}>
            {' '}
            Similar{' '}
            <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>
               Target Muscle
            </span>{' '}
            exercises{' '}
         </Typography>
         <Stack direction='row' sx={{ p: '2', position: 'relative' }}>
            {exercisesTarget.length !== 0 ? (
               <HorizontalScrollbar data={exercisesTarget} />
            ) : (
               <Loader />
            )}
         </Stack>

         <Typography
            sx={{
               fontSize: { lg: '44px', xs: '25px' },
               ml: '20px',
               mt: { lg: '100px', xs: '60px' },
            }}
            fontWeight={700}
            color='#000'
            mb='33px'
         >
            Similar{' '}
            <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>
               Equipment
            </span>{' '}
            exercises
         </Typography>
         <Stack direction='row' sx={{ p: 2, position: 'relative' }}>
            {exerciseEquipment.length !== 0 ? (
               <HorizontalScrollbar data={exerciseEquipment} />
            ) : (
               <Loader />
            )}
         </Stack>
      </Box>
   )
}

export default SimilarExercises
