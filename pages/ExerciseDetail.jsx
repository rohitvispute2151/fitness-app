import { Box } from '@mui/material'
import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Details from '../components/Details'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
import { fetchData , exerciseOptions, youtubeOptions} from '../utils/fetchData'

const ExerciseDetail = () => {
    const {id} = useParams()
    const [exerciseDetails,setExerciseDetails] = useState({})
    const [exerciseVideos,setExerciseVideos] = useState([])
    const [similiarExercises,setSimiliarExercises] = useState([])
    const [similiarEquepment,setSimiliarEquepment] = useState([])

    useEffect( () => {
        const fetchExerciseDetails = async () => {
            const execiseURL =  'https://exercisedb.p.rapidapi.com'
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDetailsData = await fetchData(`${execiseURL}/exercises/exercise/${id}`,exerciseOptions)
            setExerciseDetails(exerciseDetailsData)

            const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query={exerciseDetailsData.name} exercise`,youtubeOptions)
            setExerciseVideos(exerciseVideoData.contents)

            const similiarExercisesData = await fetchData(`${execiseURL}/exercises/target/${exerciseDetailsData.target}`,exerciseOptions)
            setSimiliarExercises(similiarExercisesData)

            const similiarEquepmentData = await fetchData(`${execiseURL}/exercises/equipment/${exerciseDetailsData.equipment}`,exerciseOptions)
            setSimiliarEquepment(similiarEquepmentData)
        }
        fetchExerciseDetails()
    },[id])

    return (
        <Box>
            <Details exerciseDetails={exerciseDetails}/>
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetails.name}/>
            <SimilarExercises similiarExercises={similiarExercises} similiarEquepment={similiarEquepment}/>
        </Box>
    )
    }

export default ExerciseDetail
