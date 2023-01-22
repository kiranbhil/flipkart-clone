import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import PriceDetails from "./priceDetails";
import SingleProduct from "./singleProduct";

const MainCart = () => {
  const [data, setData] = useState([]);

  console.log(data);

  useEffect(() => {
    axios
      .get("http://localhost:8000/cartproduct")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ChakraProvider>
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={4}
      >
        <GridItem colSpan={2} rowSpan={3}>
          {data.length > 0 &&
            data.map((elem) => (
              <SingleProduct
                key={elem._id}
                image={elem.url}
                Prodquan={elem.quantity}
                Proname={elem.tagline}
              />
            ))}
        </GridItem>
        <GridItem colSpan={1} rowSpan={2}>
          <PriceDetails />
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
};

export default MainCart;
