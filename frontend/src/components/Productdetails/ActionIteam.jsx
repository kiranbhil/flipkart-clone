import { Box, Button, Image, styled } from '@chakra-ui/react'
import React from 'react'

// const LeftContainer=styled(Box)`
// min-width:40%
// padding:40px 0px 0px 80px
// `
const ActionIteam = ({product}) => {
  return (
    // <LeftContainer>
    <Box>
        <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80" />
        <Button variant="contained">ADD TO CART</Button>
        <Button variant="contained">BUY NOW</Button>
        </Box>
    // </LeftContainer>
  )
}

export default ActionIteam