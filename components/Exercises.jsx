/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import {useEffect,useState} from 'react'

import { Box ,Typography , Stack} from "@mui/material"
import Pagination from "@mui/material/Pagination"
import {exerciseOptions,fetchData} from "../utils/fetchData"
import ExerciseCard from './ExerciseCard'

const Exercises = ({exercises ,setExercises,bodyPart}) => {
    const [currentPage,setCurrentpage] = useState(1)
    const ExcperPage = 9
    const indexOfLastExc = currentPage * ExcperPage
    const indexOfFirstExc = indexOfLastExc - ExcperPage
    const currentExcs = exercises.slice(indexOfFirstExc,indexOfLastExc)
    const Paginate = (e, value) => {
        setCurrentpage(value)
        window. scrollTo({top: 1350 ,behavior:'smooth'})
    }
    useEffect( () => {
        const fetchBodyPartData = async () => {
            let exerciseData = []
            if(bodyPart === 'all'){
                exerciseData =  await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions)   
            }else{
                exerciseData =  await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions)   
            }
            setExercises(exerciseData)
        }
        fetchBodyPartData()
    },[bodyPart])
    return (
            <Box id="exercises"
                mt="50px"
                padding="20px"
                sx={{
                    mt : {
                        lg : '110px'
                    }
                }}>
                    <Typography variant='h5' fontWeight="700" mb={'45px'}>
                        Showing Results....
                    </Typography>
                    <Stack
                        direction="row"
                        flexWrap="wrap"
                        justifyContent="center"
                        sx={{
                            gap : {
                                lg : '110px',
                                sm : '50px'
                            }
                        }}
                    >
                        {
                            currentExcs.map( (exs,index) => (
                                <ExerciseCard exercise={exs} key={index}/>
                            ))
                        }
                    </Stack>
                    <Stack alignItems="center" mt="100px">
                        {exercises.length > 9 && (
                            <Pagination
                                color='standard'
                                shape='rounded'
                                count={Math.floor(Math.ceil(exercises.length) / ExcperPage)}
                                size='large'
                                page={currentPage}
                                onChange={Paginate}
                            />
                        )}
                    </Stack>
            </Box> 
    )
}

export default Exercises
