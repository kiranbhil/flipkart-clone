import { Box,Typography,styled } from "@mui/material";
import { NavData } from "./Data";

const Component =styled(Box)`
   display:flex;
   margin:55px 130px 0 130px;
   justify-content:space-between;
`
const BoxContainer = styled(Box)`
  padding:12px 8px;
  text-align:center;
`

const Ptext = styled(Typography)`
   font-size:14px;
   font-weight:600;
   font-family:inherit;
`

const NavButtom=()=>{
    return(
        <Component style={{marginTop:"54px"}}>
          {
            NavData.map((item)=>(
                <BoxContainer>
                    <img src={item.url} alt="NavDataPic" style={{width:"64px"}} />
                    <Ptext>{item.text}</Ptext>
                </BoxContainer>
            ))
          }
        </Component>
    )
}

export default NavButtom;