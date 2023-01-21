import { Box, Button } from '@chakra-ui/react'
import { styled } from '@mui/material'
import React from 'react'

const LeftContainer=styled(Box)`
min-width:40%
padding:40px 0px 0px 80px
`
const Image=styled('img')({
  padding:"15px 20px",
  border:"1px solid gray"
})
const ActionIteam = ({product}) => {
  return (
    <LeftContainer>
        <Image src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80" />
        <Button variant="contained">ADD TO CART</Button>
        <Button variant="contained">BUY NOW</Button>
    </LeftContainer>
  )
}

export default ActionIteam