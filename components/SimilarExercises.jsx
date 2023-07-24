/* eslint-disable react/prop-types */
import { Typography, Box, Stack } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({similiarExercises,similiarEquepment}) => {
    const similiarExercisesCUT = similiarExercises.splice(0,6)
    const similiarEquepmentCUT = similiarEquepment.splice(0,6)
    return (
        <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
        <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
        Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
        </Typography>
        <Stack sx={{ p: 2, position: 'relative' }}>
        { similiarExercises.length ?  <HorizontalScrollbar data={similiarExercisesCUT}/> : <Loader />}
        </Stack>

        <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
        Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
        </Typography>
        <Stack sx={{ p: 2, position: 'relative' }}>
        { similiarExercises.length ?  <HorizontalScrollbar data={similiarEquepmentCUT} /> : <Loader />}
        </Stack>
        
    </Box>
    )
}

export default SimilarExercises
