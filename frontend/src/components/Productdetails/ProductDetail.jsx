// import { Box, Typography, Table, TableBody, TableRow, TableCell, styled } from '@mui/material';
// import { LocalOffer as Badge } from '@mui/icons-material';
import "./Details.css"
import {Badge, Box, Heading, Image, List, ListIcon, ListItem, Popover, PopoverContent, PopoverTrigger, Text} from "@chakra-ui/react"
import {SizeChart} from "../../image/"

const ProductDetail = ({ product }) => {
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date = new Date(new Date().getTime()+(5*24*60*60*1000));
    
    return (
        <Box marginTop={"10px"}>
            <Text  fontWeight={"bold"} fontSize={"18px"}>Available offers</Text>
            <Box marginTop={"15px"}>
            <List spacing={3}>
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
            <select className='option' style={{margin:"20px" ,border:"1px solid green"}} >
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
              <Text margin={'20px'}>{'> Size Chart'}</Text>
             </PopoverTrigger>
             <PopoverContent>
              <Image  />
             </PopoverContent>
            </Popover>
            {/* <SmallText>
                <Typography><StyledBadge />Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>
                <Typography><StyledBadge />Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply</Typography>
                <Typography><StyledBadge />Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select ACs</Typography>
                <Typography><StyledBadge />Partner OfferExtra 10% off upto ₹500 on next furniture purchase</Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                        <TableCell>
                            <span style={{ color: '#2874f0' }}>SuperComNet</span>
                            <Typography>GST invoice available</Typography>
                            <Typography>View more sellers starting from ₹329</Typography>
                        </TableCell>
                    </ColumnText>
                    <TableRow>
                        <TableCell colSpan={2}>
                            <img src={adURL} style={{ width: 390 }} />
                        </TableCell>
                    </TableRow>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table> */}
        </Box>
    )
}

export default ProductDetail;