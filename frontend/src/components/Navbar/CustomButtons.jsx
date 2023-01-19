
import { Button ,Box,Typography,styled} from '@mui/material';
import {ShoppingCart} from '@mui/icons-material';

const Wrapper = styled(Box)`
   display:flex;
   margin:0 3% 0 auto;
   & > button, & > p, & > div {
     margin-right:40px;
     font-size:16px
     align-items:center;
   }
`
const Container=styled(Box)`
    display:flex;
`
const LoginButton = styled(Button)`
   // cplort:#2874f0;
   coloe:black;
   background:#fff;
   text-transform:none;
   padding:5px 40px;
   border-radius:3px;
   box-shadow:none;
   font-weight:600;
   hight:32px;
`


const CustomButtons = ()=>{
    return(
       <Wrapper>
          <LoginButton varient="contained" >Login</LoginButton>

          <Typography style={{marginTop:3,width:135}}>Become a Seller</Typography>
          <Typography style={{marginTop:3,width:135}}>More</Typography>

          <Container>
             <ShoppingCart/>
             <Typography>Cart</Typography>
          </Container>
       </Wrapper>
    )
}

export default CustomButtons