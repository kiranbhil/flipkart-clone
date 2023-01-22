import { Box, Button, Image, Input,Text } from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ShopKart from "../Assets/ShopKart.png";

const Navbar = () => {
  const navigate = useNavigate()
  const login =() =>{
    navigate("/login")
  }
  return (
    <Box  id="navbar">

    <Box id="navbar upper" display="flex" w="100%" bg="rgb(40, 116, 240)" padding="0.5%">

        <Box id="left" w="50%" display="flex">

         <Box w="30%" margin="auto">
         <Link to={"/"}>
          <Image margin="auto" src={ShopKart} alt="logo" h={["10px","15px","30px"]} />
         </Link>
         </Box>
          <Input placeholder='Search for products, brands and more' size={['xs','sm','md']} margin="auto" color="black" bg="white" border="none" borderRadius="none" />
        </Box>
        
        <Box id="Right" w="50%" display="flex">

        <Button onClick={login} margin="auto" color="rgb(40, 116, 240)" bg="white" size={['xs','sm','md']} border="1px solid black" borderRadius="none" w="20%">Login</Button>
        <Text textAlign="center" margin="auto" color="white" _hover={{"cursor":"pointer"}} fontSize={["10px","12px","16px"]}>Become a Seller</Text>
        <Text textAlign="center" margin="auto" color="white" _hover={{"cursor":"pointer"}} fontSize={["10px","12px","16px"]}>More</Text>
        <Box  display="flex"  h={["15px","20px","30px"]} margin="auto" gap="10%">
        <Link to={"/cart"}>

            <Image  margin="auto" h="70%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0OpsCLto4sXJMMRg3o_x4Gfe3lwYQ5lwx1A&usqp=CAU" />
            <Text textAlign="center" margin="auto" color="white"  _hover={{"cursor":"pointer"}} fontSize={["10px","12px","16px"]}>Cart</Text>
        </Link>
        </Box>
        </Box>
    </Box>


    <Box id="navbar lower" display="flex" gap={["2%","3%","5%"]} w="100%" mt="10px" boxShadow='lg' p='6' bg='white' fontFamily="Roboto, Arial, sans-serif" padding="2%">

      <Box id="box1">
      <Link to={"/products"}>

      <Image margin="auto" h={["30%","40%","60%"]} src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" />
      <Text textAlign="center"color="black"  _hover={{"cursor":"pointer"}} fontSize={["8px","10px","14px"]}>Grocery</Text>
      </Link>
      </Box>

      <Box id="box2">
      <Link to={"/products"}>

      <Image margin="auto" h={["30%","40%","60%"]} src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" />
      <Text textAlign="center" color="black"  _hover={{"cursor":"pointer"}} fontSize={["8px","10px","14px"]}>Mobiles</Text>
      </Link>
      </Box>

      <Box id="box3">
      <Link to={"/products"}>
      <Image margin="auto" h={["30%","40%","60%"]} src="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100" />
      <Text textAlign="center" color="black"  _hover={{"cursor":"pointer"}} fontSize={["8px","10px","14px"]}>Fashion</Text>
      </Link>
      </Box>

      <Box id="box4">
      <Link to={"/products"}>
      <Image margin="auto" h={["30%","40%","60%"]} src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" />
      <Text textAlign="center" color="black"  _hover={{"cursor":"pointer"}} fontSize={["8px","10px","14px"]}>Electronics</Text>
      </Link>
      </Box>

      <Box id="box5">
      <Link to={"/products"}>
      <Image margin="auto" h={["30%","40%","60%"]} src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" />
      <Text textAlign="center" color="black"  _hover={{"cursor":"pointer"}} fontSize={["8px","10px","14px"]}>Home</Text>
      </Link>
      </Box>

      <Box id="box6">
      <Link to={"/products"}>
      <Image margin="auto" h={["30%","40%","60%"]} src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" />
      <Text textAlign="center" color="black"  _hover={{"cursor":"pointer"}} fontSize={["8px","10px","14px"]}>Appliances</Text>
      </Link>
      </Box>

      <Box id="box7">
      <Link to={"/products"}>
      <Image margin="auto" h={["30%","40%","60%"]} src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100" />
      <Text textAlign="center" color="black"  _hover={{"cursor":"pointer"}} fontSize={["8px","10px","14px"]}>Travel</Text>
      </Link>
      </Box>

      <Box id="box8">
      <Link to={"/products"}>
      <Image margin="auto" h={["30%","40%","60%"]} src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" />
      <Text textAlign="center" color="black"  _hover={{"cursor":"pointer"}} fontSize={["8px","10px","14px"]}>Top Offers</Text>
      </Link>
      </Box>

      <Box id="box9" >
      <Link to={"/products"}>
      <Image margin="auto" h={["30%","40%","60%"]} src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100" />
      <Text textAlign="center" color="black"  _hover={{"cursor":"pointer"}} fontSize={["8px","10px","14px"]}>Beauty, Toys & More</Text>
      </Link>
      </Box>
{/* 
      <Box id="box10">
      <Image margin="auto" h={["30%","40%","60%"]} src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100" />
      <Text textAlign="center" color="black"  _hover={{"cursor":"pointer"}} fontSize={["8px","10px","14px"]}>Two Wheelers</Text>
      </Box> */}
    </Box>
    </Box>
  )
}

export default Navbar;