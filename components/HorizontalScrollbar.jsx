/* eslint-disable react/prop-types */
import { Box, Stack } from '@mui/material'
import BodyPart from './BodyPart'
import "react-horizontal-scrolling-menu/dist/styles.css";
import ExerciseCard from './ExerciseCard';
const HorizontalScrollbar = ({ data , bodyPart , setBodypart , isBodyPart}) => {
    return (   
        <Stack direction="row" flexWrap="wrap" gap="1rem" justifyContent="space-between" 
        >
            {
                // eslint-disable-next-line react/prop-types
                data.map( (item) => 
                    (
                        <Box 
                        key={item.id || item} 
                        itemid ={item.id || item}
                        title = {item.id || item }
                        m='0 40px'>
                        {isBodyPart ? <BodyPart item={item} bodyPart={bodyPart} setBodypart={setBodypart} /> : <ExerciseCard exercise={item} /> }
                        </Box>
                    )
                )
            }
        </Stack>
    )
}

export default HorizontalScrollbar
