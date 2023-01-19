import { Box, ChakraProvider, Divider, Flex, Text } from "@chakra-ui/react";

const PriceDetails = () => {
  return (
    <ChakraProvider>
      <Box>
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
            <Text>Price (4 items)</Text>
            <Text>₹8453</Text>
          </Flex>
          <Flex justifyContent={"space-between"}>
            {" "}
            <Text>Discount</Text>
            <Text color={"#388e3c"}>₹8453</Text>
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
            <Text>₹1306</Text>
          </Flex>
          <Divider variant="dashed" borderColor="blackAlpha.500" />

          <Text fontWeight={"medium"} color="#388e3c">
            You will save ₹5,006 on this order
          </Text>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default PriceDetails;
