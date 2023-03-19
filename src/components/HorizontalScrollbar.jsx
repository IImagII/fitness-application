import React, { useContext } from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { Box, Typography } from '@mui/material'

import BodyPart from './BodyPart'
import RightArrowIcon from '../assets/icons/right-arrow.png'
import LeftArrowIcon from '../assets/icons/left-arrow.png'
import ExerciseCard from './ExerciseCard'

/*================это стрелки для навигации по слайдеру===========*/
const LeftArrow = () => {
   const { scrollPrev } = useContext(VisibilityContext)

   return (
      <Typography onClick={() => scrollPrev()} className='right-arrow'>
         <img src={LeftArrowIcon} alt='right-arrow' />
      </Typography>
   )
}

const RightArrow = () => {
   const { scrollNext } = useContext(VisibilityContext)

   return (
      <Typography onClick={() => scrollNext()} className='left-arrow'>
         <img src={RightArrowIcon} alt='right-arrow' />
      </Typography>
   )
}
/*================это стрелки для навигации по слайдеру===========*/

// это компонент слайдера по категориям
const HorizontalScrollbar = ({ data, isBodyParts, setBodyPart, bodyPart }) => {
   return (
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
         {data.map(item => (
            <Box
               key={item.id || item}
               itemId={item.id || item} //это сделано для того чтобы работал слайдер горизонтальный
               title={item.id || item} //это сделано для того чтобы работал слайдер горизонтальный
               m='0 40px'
            >
               {isBodyParts ? (
                  <BodyPart
                     item={item}
                     bodyPart={bodyPart}
                     setBodyPart={setBodyPart}
                  />
               ) : (
                  <ExerciseCard exercise={item} />
               )}
            </Box>
         ))}
      </ScrollMenu>
   )
}

export default HorizontalScrollbar
