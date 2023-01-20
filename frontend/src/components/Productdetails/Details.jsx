import { Box ,Heading,Typography} from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { useParams } from 'react-router-dom'
import { getProductDetails } from '../../redux/actions/ProductAction'
import ActionIteam from './ActionIteam'


const Details = () => {

const dispatch=useDispatch()
const {id}=useParams()
const {loading,product}= useSelector(state=> state.getProductDetails)

  useEffect(()=>
  {
    if(product && id==product.id){
      dispatch(getProductDetails(id))
    }
  },[dispatch,id,loading,product])

  return (
    <Box>
      {loading && product && Object.keys(product).length&&
      <Box>
        <Box>
          <ActionIteam product={product} />
        </Box>
        <Box>
          <Heading>Title</Heading>
        </Box>

      </Box>
     }
    </Box>
  )
}

export default Details