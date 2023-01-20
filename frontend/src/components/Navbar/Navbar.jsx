import {AppBar, Toolbar, styled, Box, Typography } from "@mui/material"
import Search from "./Search"
import CustomButtons from "./CustomButtons"
import ShopKart from "../Assets/ShopKart.png"


const StyledHeader = styled(AppBar)`

 background: #2874f0;
//  background: purple;
 height: 55px
`

const Component = styled(Box)`
  margin-left: 12%;
  line-height:0;
`
const SubHeading = styled(Typography)`
  font-style: italic;
  font-size: 10px;
`

const PlusImage= styled("img")({
    width:10,
    height:10,
    marginLeft:4
})

const CustomButtonWrapper = styled(Box)`
   margin : 0 0 0 5%;
`


const Navbar =()=>{

const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return(
        <StyledHeader>
            <Toolbar style={{minHeight:55}}>
               <Component>
                  <img src={ShopKart} alt="logo" style={{width:100}} />
                  <Box style={{display:"flex"}}> 
                    <SubHeading>Explore&nbsp;
                        <Box component="span" style={{color:"#FFE500"}} >Plus</Box>
                    </SubHeading>
                    <PlusImage src={subURL} alt="sublogo" />
                  </Box>
               </Component>
               <Search/>
               <CustomButtonWrapper>
                   <CustomButtons/>
               </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    )
}


export default Navbar