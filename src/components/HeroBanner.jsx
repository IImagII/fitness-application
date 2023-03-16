import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import HeroBannerImage from './../assets/images/banner.png'

const HeroBanner = () => {
   return (
      <Box
         // Box соответсвует тегу div
         sx={{
            //   в sx-можно писать свои кастомные паремтры стилизации
            mt: {
               lg: '212px',
               xs: '70px',
            },
            ml: {
               sm: '50px',
            },
         }}
         positon='relative'
         p='20px'
      >
         <Typography color='#ff2625' fontSize={26}>
            {/* Typography - соответсвует тегу p применяется для оформления текта*/}
            Fitness Club
         </Typography>
         <Typography
            fontWeight={700}
            sx={{
               fontSize: {
                  lg: '44px',
                  xs: '40px',
               },
            }}
            mb='23px'
            mt='30px'
         >
            Sweat, Smile
            <br /> and Repeat
         </Typography>
         <Typography fontSize='22px' lineHeight='35px' mb='30px'>
            Check out the most effective exercises
         </Typography>
         <Button
            variant='contained'
            href='#exercises'
            color='error'
            sx={{ background: '#ff2625', px: '10px', py: '10px' }}
         >
            Explore Exercises
         </Button>
         <Typography
            fontWeight={600}
            color='#ff2625'
            sx={{
               opacity: 0.1,
               display: {
                  lg: 'block',
                  xs: 'none',
               },
            }}
            fontSize='200px'
         >
            Exircise
         </Typography>
         <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />
      </Box>
   )
}

export default HeroBanner
