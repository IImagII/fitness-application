import React from 'react'
import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'
import { Button, Stack, Typography } from '@mui/material'

const Detail = ({ exerciseDetail }) => {
   const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail

   const extraDetail = [
      {
         id: 1,
         icon: BodyPartImage,
         name: bodyPart,
      },
      { id: 2, icon: TargetImage, name: target },
      {
         id: 3,
         icon: EquipmentImage,
         name: equipment,
      },
   ]

   return (
      <Stack
         gap='60px'
         sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}
      >
         <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
         <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
            <Typography variant='h3'>{name}</Typography>
            <Typography variant='h6'>
               {' '}
               Exercises keep you strong.{' '}
               <span style={{ textTransform: 'capitalize' }}>{name}</span> bup
               is one of the best <br /> exercises to target your {target}. It
               will help you improve your <br /> mood and gain energy.
            </Typography>
            {extraDetail.map(detail => (
               <Stack
                  key={detail.id}
                  direction='row'
                  gap='24px'
                  alignItems='center'
               >
                  <Button
                     sx={{
                        background: '#fff2db',
                        borderRadius: '50%',
                        width: '100px',
                        height: '100px',
                     }}
                  >
                     <img
                        src={detail.icon}
                        alt={detail.name}
                        style={{ width: '50px', height: '50px' }}
                     />
                  </Button>
                  <Typography variant='h5' textTransform='capitalize'>
                     {' '}
                     {detail.name}
                  </Typography>
               </Stack>
            ))}
         </Stack>
      </Stack>
   )
}

export default Detail
