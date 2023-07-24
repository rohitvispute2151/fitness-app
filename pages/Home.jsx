import { Box } from '@mui/material'
import {useState} from 'react'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'

const Home = () => {
    const [exercises,setExercises] = useState([])
    const [bodyPart,setBodypart] = useState('all')

    return (
        <Box>
            <HeroBanner />
            <SearchExercises 
            setExercises={setExercises}
            bodyPart={bodyPart}
            setBodypart={setBodypart}/>
            <Exercises 
            setExercises={setExercises}
            bodyPart={bodyPart}
            exercises={exercises}/>
        </Box>
    )
}

export default Home
