import {
  Box,
  Button,
  Center,
  ChakraProvider,
  Image,
  Text,
} from "@chakra-ui/react";

const EmptyCart = () => {
  return (
    <ChakraProvider>
      <Center
        display={"flex"}
        flexDir="column"
        gap={2}
        w={"97%"}
        m="auto"
        mt={"100px"}
        boxShadow={"rgba(0, 0, 0, 0.25) 0px 1px 3px;"}
        pt="30px"
        pb="30px"
      >
        <Box w={"18%"} mb={"15px"}>
          <Image
            src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
            alt="Cart Empty"
            h="100%"
            w={"100%"}
          />
        </Box>
        <Text fontSize={"18"}>Your cart is empty!</Text>
        <Text fontSize={"13"}>Add items to it now.</Text>
        <Button
          bgColor={"#2874f0"}
          w={"16%"}
          mt="15px"
          borderRadius={2}
          color="whiteAlpha.900"
          fontWeight={"normal"}
          _hover={"none"}
        >
          Shop now
        </Button>
      </Center>
    </ChakraProvider>
  );
};

export default EmptyCart;
