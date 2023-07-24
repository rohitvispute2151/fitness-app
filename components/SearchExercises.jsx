/* eslint-disable react/prop-types */
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import {exerciseOptions,fetchData} from "../utils/fetchData"
import HorizontalScrollbar from "./HorizontalScrollbar"


const SearchExercises = ({setBodypart,setExercises,bodyPart}) => {
    const [search , setSearch] = useState('')
    const [bodyParts,setBodyparts] = useState([])

    useEffect( () => {
        const fetchExerciseData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions)
            setBodyparts(['all',...bodyPartsData])
        }
        fetchExerciseData()
    },[])

    const handleSearch = async () => {
        if(search){
            const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions)   
            
            const searchedExercises = exerciseData.filter(
                    (item) => item.name.toLowerCase().includes(search)
                        || item.target.toLowerCase().includes(search)
                        || item.equipment.toLowerCase().includes(search)
                        || item.bodyPart.toLowerCase().includes(search),
            );
            setSearch('')
            setExercises(searchedExercises)
            window.scrollTo({top : 1350, left : 0 ,behavior : 'smooth'})
        }
    }
    return (
        <Box sx={{
            mt : {
                lg : '25px',
                xs : '15px'
            },
            ml : {
                sm : '50px'
            }
        }} p="20px">
            <Typography textAlign="center" sx = {
                {
                    fontSize : {
                        lg : '50px',
                        sm : '35px',
                        xs : '20px'
                    }
                }
            } fontWeight="600" mb="50px">
            Awesome Exercises you should know
            </Typography>
            <Box position="relative" mb="72px" textAlign="center">
                <Stack direction='row' justifyContent="center"> 
                <TextField
                    right='0'
                    value= {search}
                    onChange={ e => {setSearch(e.target.value.toLowerCase())}}
                    placeholder='search Exercises'
                    type='text'
                    sx={{
                        input : {
                            fontWeight : '700',
                            border : 'none',
                            borderRadius : '4px',
                        },
                        width : {
                            lg : '80%',
                            sm : '50%'
                        },
                        backgroundColor : '#fff'   
                    }}
                />
                <Button variant='contained' color='error' onClick={handleSearch}>search</Button>
                </Stack>
            </Box>
            <Box sx={{ 
                position : 'relative',
                width : '100%',
                p : '20px'
            }}>
                <HorizontalScrollbar 
                data={bodyParts} 
                bodyPart={bodyPart}
                setBodypart={setBodypart} isBodyPart />
            </Box>
        </Box>
    )
}

export default SearchExercises
