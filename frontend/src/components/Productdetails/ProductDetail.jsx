// import { Box, Typography, Table, TableBody, TableRow, TableCell, styled } from '@mui/material';
// import { LocalOffer as Badge } from '@mui/icons-material';
import "./Details.css"
import {Alert, Badge, Box, Heading, Image, List, ListIcon, ListItem, Popover, PopoverContent, PopoverTrigger, Text} from "@chakra-ui/react"
import SizeChart from "../../image/SizeChart.jpeg";

const ProductDetail = ({ product }) => {
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    // const date = new Date(new Date().getTime()+(5*24*60*60*1000));
    const handlechange=(e)=>
  {
    const value=e.target.value
   
    if(!value)
    {
        Alert("Please Select The size")
    }
  }
    return (
        <Box mb={"50px"} marginTop={"10px"}>
            <Text  fontWeight={"bold"} fontSize={"17px"}>Available offers</Text>
            <Box marginTop={"15px"}>
            <List spacing={2}>
               <ListItem>
                <ListIcon icon="check-circle" color="green" />
                    Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card
                </ListItem>
               <ListItem>
                <ListIcon icon="check-circle" color="green" />
                    Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply
                </ListItem>
               <ListItem>
                <ListIcon icon="check-circle" color="green" />
                    Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select ACs
               </ListItem>
               <ListItem>
                <ListIcon icon="check-circle" color="green" />
                    Partner OfferExtra 10% off upto ₹500 on next furniture purchase
                </ListItem>
            </List>
            <select onChange={handlechange} className='option' style={{margin:"20px" ,border:"1px solid green"}} >
            <option>Choose Size</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            </select>
            </Box>
            <Popover>
             <PopoverTrigger>
              <Text>{'> Size Chart'}</Text>
             </PopoverTrigger>
             <PopoverContent>
              <Image src={SizeChart} />
             </PopoverContent>
            </Popover>
            <Box marginTop={'10px'}>
              <Image width={"60%"} src={adURL} />
            </Box>
        </Box>
    )
}

export default ProductDetail;