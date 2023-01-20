import React from 'react'
import { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { useParams } from 'react-router-dom'
import { getProductDetails } from '../../redux/actions/ProductAction'


const Details = () => {
  
const dispatch=useDispatch()
const {id}=useParams()
// const {loading,product}= useSelector(state=> state.getProductDetails)

  useEffect(()=>
  {
    dispatch(getProductDetails(id))
  },[dispatch,id])

  return (
    <div>Details</div>
  )
}

export default Details