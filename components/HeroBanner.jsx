import { Box , Button , Typography } from '@mui/material'
import React from 'react'
import HeroBannerImage from "../assets/images/banner.png"
const HeroBanner = () => {
    return (
        <Box sx={{
            mt : {
                lg : '112px',
                xs : '70'
            },
            ml : {
                sm : '50px'
            }
        }} position="relative" p="20px">
            <Typography fontWeight="600" color="#FF2526" fontSize="25px">
                Fitness Club
            </Typography>
            <Typography fontWeight="700" sx={{
                fontSize : {
                    lg : '44px',
                    sm : '40px'
                }
            }}>
                Sweat, Smile <br /> and Reapeat
            </Typography>
            <Typography lineHeight="35px" fontSize="22px"mb={4} >
                Check out the most effective exercises
            </Typography>
            <Button variant='contained' color="error" href='#exercises'>
                Explore Exercise
            </Button>
            <Typography sx={{
                opacity : '0.1',
                display : {
                    lg : 'block',
                    md : 'block',
                    sm : 'none'
                }
            }} fontSize= "150px" color="#FF2625" fontWeight="700">
                Exercises
            </Typography>
            <img src={HeroBannerImage} alt="HeroBannerImage" className='hero-banner-img'/>
        </Box>
    )
}

export default HeroBanner
