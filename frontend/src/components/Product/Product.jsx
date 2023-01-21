// import { Grid } from "@chakra-ui/react";
import { Typography, Box, styled,Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

const Component = styled(Box)`
  background: #ffffff;
  margin-top: 10px;
`;

const Image = styled("img")`
  width: auto;
  height: 150px;
`;

const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`;


const Products = () => {
    const [data,setData] = useState([]);

    const getData = () => {
      axios
      .get("http://localhost:8000/products")
      .then(data => setData(data.data))
      .catch(error => console.log(error));
      };
    
    useEffect(() => {
      getData()
    }, []);
  
    console.log(data)
  
    return (
      <Component>
        <Grid container spacing={{ md: 2, lg: 5 }} columns={{ sm: 1, md: 2, lg: 4 }}>
          {data.map((product) => (

            <Link key={product.id} to={`product/${product._id}`} style={{ textDecoration: "none" }}>
              <Grid item xs={2} sm={4} md={4} key={product.id}>
            
              <Box
                textAlign="center"
                style={{
                  padding: "25px 15px",
                }}
              >

                <Image src={product.url} alt="Products" />
                <Text
                  style={{
                    fontWeight: 600,
                    color: "#212121",
                  }}
                >
                  {product.title.shortTitle}
                </Text>
                <Text
                  style={{
                    color: "green",
                  }}
                >
                  {product.discount}
                </Text>
                <Text
                  style={{
                    color: "#212121",
                    opacity: ".6",
                  }}
                >
                  {product.tagline}
                </Text>
              </Box>
              </Grid>
            </Link>

          ))}
          </Grid>
      </Component>
    );
  };
  
  export default Products;