import { Box,Heading} from '@chakra-ui/react'
import { Grid, styled } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { useParams } from 'react-router-dom'
import { getProductDetails } from '../../redux/actions/ProductAction'
import ActionIteam from './ActionIteam'

const Component=styled(Box)`
backgrond:#F2F2F2`
const Container=styled(Grid)`
background:#FFFFFF;
display:flex`;
// const Rightcontainer=styled()
const Details = () => {

const dispatch=useDispatch()

const {id}=useParams()

const {loading,product}= useSelector(state=> state.getProductDetails)

  useEffect(()=>
  {
    if(product && id !==product.id){
      dispatch(getProductDetails(id))
    }
  },[dispatch,id,loading,product])

  return (
    <Box>
      {loading && product && Object.keys(product).length&&
      <Box>
        <Box>
          <ActionIteam />
        </Box>
        <Box>
          <Heading>Title</Heading>
        </Box>

      </Box>
     }
    </Box>
    // <Component>
    //   <Container>
    //     <Grid item lg={4} md={4} sm={8} xs={12}>
    //        <ActionIteam />
    //     </Grid>
    //     <Grid item lg={8} md={8} sm={8} xs={12}>
    //       <Heading>Title</Heading>
    //     </Grid>
    //   </Container>
    // </Component>
  )
}

export default Details