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

import { signup } from "./firebase-config";
import { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
  
  
export default function Signup() {

  const [loading,setloading]=useState(false)
  const emailRef=useRef()
  const passwordRef=useRef()
  const navigate=useNavigate()

  async function createuser(){
      setloading(true)
      try{
          await signup(emailRef.current.value,passwordRef.current.value)
          alert("user created")
          navigate("/login")
      }catch{        
          alert("user already exist")
      }
      setloading(false)
  }


    return (
    <Box w="100%">
      <Stack minH={'90vh'} 
      direction={{ base: 'column', md: 'row' }} 
      align={'center'} bg="#2874f0"
      w="50%" margin="auto">
        <Flex px={45}>
          <Stack px={8}  spacing={4} width={["50px","150px","320px"]} border="1px solid black" bg="white" margin="auto">
            <Stack py={14} spacing={8} w={"100%"}  margin="auto">
            <Heading fontSize={'6xl'} align={'center'}>Register</Heading>
            <Text fontSize={'md'}>Create a free account or <NavLink color="orange.600" to="/login">Login</NavLink></Text>
            <FormControl id="email">
              <FormLabel fontWeight={'bold'}>Email</FormLabel>
              <Input type="email" ref={emailRef} w="97%" h="25px"/>
            </FormControl>
            <FormControl id="username">
              <FormLabel fontWeight={'bold'}>Username</FormLabel>
              <Input type="text" w="97%" h="25px"/>
            </FormControl>
            <FormControl id="password">
              <FormLabel fontWeight={'bold'}>Password</FormLabel>
              <Input type="password" ref={passwordRef} w="97%" h="25px"/>
            </FormControl>
            <Stack spacing={6}>
              <Stack spacing={4} align='start'>
              <Button size='md' px={8} w="100%" h="40px" bg="#fb641b" _hover={{bg:"orange", cursor:"pointer"}} color="white" border="none" variant={'solid'} onClick={createuser} disabled={loading}>
                Register
              </Button>
              </Stack>
            </Stack>
            </Stack>
            </Stack>
        </Flex>
        <Flex>
          <Image
            alt={'Login Image'}
            // objectFit={'cover'}
            ml="20%"
            src={
              'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png'
            }
          />
        </Flex>
      </Stack>
      </Box>
    );
  }