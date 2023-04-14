import {
    Box,
    chakra,
    Divider,
    Flex,
    Grid,
    Image,
    SimpleGrid,
    Text,
  } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
  
  
export default function BasicStatistics() {
    const [data,setData] = useState([]);

    const getData = () => {
      axios
      .get("https://concerned-rose-bighorn-sheep.cyclic.app/products")
      .then(data => setData(data.data))
      .catch(error => console.log(error));
      };
    
    useEffect(() => {
      getData()
    }, []);
  
console.log(data)
    return (
      <Box maxW="full" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'bold'}>
            Deals of the Day
        </chakra.h1>
        <Divider/>
        <br />
        <SimpleGrid columns={{ base: 1, md: 2, lg:5}} spacing={{ base: 5, lg: 8 }}>
        {data.map((product) => (
            <Link key={product.id} to={`product/${product.id}`} style={{ textDecoration: "none" }}>
            <Grid alignContent={'center'} item xs={2} sm={4} md={4} key={product.id}>
            <Box borderWidth='1px' borderRadius='lg'
                textAlign="center"
                style={{
                padding: "25px 15px",
                }}
            >
                <Image height={"280px"} width={"full"} src={product.url} alt="Products" />
                <br />
                <Text
                noOfLines={1}
                style={{
                    fontWeight: 'bold',
                    color: "#212121",
                }}
                >
                {product.title.shortTitle}
                </Text>
                <br />
                <Text
                style={{
                    color: "green",
                }}
                >
                {product.discount}
                </Text>
                <Flex justifyContent={'space-around'}>
                <Text
                style={{
                    color: "#212121",
                    opacity: ".6",
                }}
                >
                ₹ {product.price.mrp}
                </Text>

                <Text
                as='del'
                style={{
                    color: "#212121",
                    opacity: ".6",
                    
                }}
                >
                ₹{product.price.cost}
                </Text>

                <Text
                style={{
                    color: "green",
                    opacity: ".6",
                }}
                >
                {product.price.discount} Off
                </Text>
                </Flex>
            </Box>
            </Grid>
            </Link>
            ))}
        </SimpleGrid>
      </Box>
    );
  }


  