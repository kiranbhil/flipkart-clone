import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
    Text,
    Box,
  } from '@chakra-ui/react';
  
  import React, { useRef, useState } from "react";
  import { login } from "./firebase-config";
  // import {Link, useNavigate} from "react-router-dom";
  import {useSelector , useDispatch} from 'react-redux';
  import { userEmail} from '../../redux/actions/Loginaction'
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
  
export default function Login() {

  const auth  = useSelector((store)=> store.isAuth );
    const dispatch = useDispatch();

    const [loading,setloading]=useState(false);
    const [userNotFound,setuserNotFount]=useState(false);
    
    const emailRef=useRef();
    const passwordRef=useRef();
    const usenavigate=useNavigate()

    async function signin(){
      setloading(true)
      dispatch( userEmail(emailRef.current.value));
      try{
          await login(emailRef.current.value,passwordRef.current.value)
          alert("Login Succesful")
          usenavigate("/adminpannel");

      }catch(error){
          setuserNotFount(true)
          var errorMessage = error.message;
          console.log(errorMessage);
          alert("User not Exist")
      }
      setloading(false)
  }
  
    return (
      <Stack 
        minH={'90vh'}
       direction={{ base: 'column', md: 'row' }} 
        align={'center'} bg="#2874f0" w="50%" margin="auto" display="flex">
        <Flex px={45} display="flex">
          <Stack px={8}  spacing={4} w='100%' bg="white"   border="1px solid black" >
            <Stack py={14} spacing={8} w={"100%"}>
            <Heading fontSize={'6xl'} align={'center'}>Login</Heading>
            <Text fontSize={'md'}>Need a Flipkart account? <NavLink color="orange.600" to="/signup">Create an account</NavLink></Text>
            <FormControl id="email">
              <FormLabel fontWeight={'bold'} >Username or Email</FormLabel>
              <Input type="email" ref={emailRef} w="97%" h="25px"/>
            </FormControl>
            <FormControl id="password">
              <FormLabel fontWeight={'bold'}>Password</FormLabel>
              <Input type="password" ref={passwordRef}  w="97%" h="25px"/>
            </FormControl>
            <Button size='md' w="100%" h="40px" px={8} bg="#fb641b" _hover={{bg:"orange", cursor:"pointer"}} color="white" border="none" variant={'solid'} disabled={loading} onClick={signin}>
                Login
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex display="flex">
          <Image
             ml="20%"
            alt={'Login Image'}
            // objectFit={'cover'}
            src={
              'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png'
            }
          />
        </Flex>
      </Stack>
    )
}