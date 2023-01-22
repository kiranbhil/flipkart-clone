import { AddIcon, InfoIcon, MinusIcon, SmallAddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  ChakraProvider,
  Flex,
  Heading,
  Image,
  Input,
  PinInput,
  PinInputField,
  Spacer,
  Stack,
  Tag,
  TagLabel,
  TagRightIcon,
  Text,
} from "@chakra-ui/react";

const SingleProduct = ({ image, id, Proname, Prodquan }) => {
  const str_quantity = Prodquan + "";

  return (
    <ChakraProvider>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="elevated"
      >
        <Stack p={5}>
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "300px" }}
            src={image}
            alt={id}
          />
          <Flex justifyContent={"center"} alignItems="center" gap={"3"}>
            <Button borderRadius={"full"} variant="outline" _hover={"none"}>
              -
            </Button>
            <PinInput defaultValue={str_quantity}>
              <PinInputField />
            </PinInput>
            <Button borderRadius={"full"} variant="outline" _hover={"none"}>
              +
            </Button>
          </Flex>
        </Stack>

        <Stack>
          <CardBody>
            <Flex gap={8}>
              <Heading
                size="sm"
                _hover={{ color: "#2874f0", cursor: "pointer" }}
              >
                {Proname}
              </Heading>
              <Heading size="sm">Delivery by Mon Jan 23 | Free₹40</Heading>
            </Flex>

            <Text pt={1} color="#878787">
              Pack of 4
            </Text>
            <Flex gap="4" pt={2} pb={8}>
              <Text color="#878787">Seller:ADONYX</Text>
              <Box
                w={{
                  base: "25%",
                  sm: "25%",
                  md: "20%",
                  lg: "15%",
                  xl: "10%",
                }}
                display="flex"
                justifyContent={"center"}
                alignItems="center"
              >
                <Image src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" />
              </Box>
            </Flex>
            <Flex gap={"3"} alignItems={"center"}>
              <Text fontSize={"sm"} as="del">
                ₹199
              </Text>
              <Text fontSize={"lg"} fontWeight="medium">
                ₹99
              </Text>
              <Tag bgColor={"transparent"} color="#388e3c">
                <TagLabel>50%Off</TagLabel>
              </Tag>
              <Tag bgColor={"transparent"} color="#388e3c">
                <TagLabel>2 offers applied</TagLabel>
                <TagRightIcon as={InfoIcon} />
              </Tag>
            </Flex>
          </CardBody>

          <CardFooter>
            <Flex gap={3}>
              <Button bgColor={"transparent"} _hover={{ color: "#2874f0" }}>
                SAVE FOR LATER
              </Button>
              <Button bgColor={"transparent"} _hover={{ color: "#2874f0" }}>
                REMOVE
              </Button>
            </Flex>
          </CardFooter>
        </Stack>
      </Card>
    </ChakraProvider>
  );
};

export default SingleProduct;
