import { Box, ChakraProvider, Divider, Flex, Text } from "@chakra-ui/react";

const PriceDetails = ({ total, totalMrp }) => {
  const discount = totalMrp - total;

  console.log(discount);

  return (
    <ChakraProvider>
      <Box
        boxShadow={
          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"
        }
        borderRadius="5"
        position={"sticky"}
        
      >
        <Text
          ml={"5%"}
          fontSize={"17px"}
          fontWeight={"semibold"}
          pt="10px"
          pb={"10px"}
          color="#878787"
        >
          PRICE DETAILS
        </Text>
        <Divider />
        <Flex p="10px 20px" flexDir={"column"} gap="4" fontWeight={"normal"}>
          <Flex justifyContent={"space-between"}>
            <Text>Price</Text>
            <Text>₹{total}</Text>
          </Flex>
          <Flex justifyContent={"space-between"}>
            {" "}
            <Text>Discount</Text>
            <Text color={"#388e3c"}>₹{discount}</Text>
          </Flex>
          <Flex justifyContent={"space-between"}>
            <Text>Delivery Charges</Text>
            <Text color={"#388e3c"}>FREE</Text>
          </Flex>
          <Divider variant="dashed" borderColor="blackAlpha.500" />
          <Flex
            justifyContent={"space-between"}
            fontSize="lg"
            fontWeight={"semibold"}
          >
            <Text>Total Amount</Text>
            <Text>₹{totalMrp}</Text>
          </Flex>
          <Divider variant="dashed" borderColor="blackAlpha.500" />

          <Text fontWeight={"medium"} color="#388e3c">
            You will save ₹{discount} on this order
          </Text>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default PriceDetails;
