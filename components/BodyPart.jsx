/* eslint-disable react/prop-types */
import { Stack,Typography } from '@mui/material'
const BodyPart = ({item,bodyPart,setBodypart}) => {
    return (
        <Stack
            type = 'button'
            alignItems= 'center'
            justifyContent = 'center'
            className='bodyPart-card'
            sx={
                {
                    borderTop : bodyPart === item ? '4px solid #FF2625' : '',
                    borderBottomLeftRadius : '20px',
                    width : '100px',
                    backgroundColor : '#fff',
                    height : '50px',
                    cursor : 'pointer',
                    
                }}
                onClick={ () => {
                    setBodypart(item)
                    window.scrollTo({top : 1350, left : 0 ,behavior : 'smooth'})
                }}>
            <Typography fontSize="15px" fontWeight="bold" color="#3A1212"
            textTransform="capitalize">
                {item}
            </Typography>

        </Stack>
    )
}

export default BodyPart
