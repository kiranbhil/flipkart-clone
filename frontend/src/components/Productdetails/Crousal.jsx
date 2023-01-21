import React, { useState } from "react";
import {
  Box,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import Slider from "react-slick";

const settings = {
  dots: false,
  arrows: false,
  vertical: true,
  infinite: true,
  autoplay: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
};

export default function Carousel({ data }) {
  const [slider, setSlider] = useState(null);

  return (
    <Box
    >
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <br />
      <Box
        style={{
          flexDirection: "column",
        }}
      >
        <Box
        >
          <IconButton
            aria-label="upButton"
           
            bg={"transparent"}
            zIndex={2}
            onClick={() => slider?.slickPrev()}
            _hover={{ bg: "none" }}
          >
            <ChevronUpIcon
            color="#111"
              fontSize={{
                base: "2rem",
                sm: "3rem",
                md: "3rem",
                lg: "4rem",
                xl: "5rem",
              }}
              onClick={() => slider?.slickPrev()}
            />
          </IconButton>
        </Box>
        <Box
          m="auto"
          border={'1px solid white'}
          overflow={"hidden"}
        >
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {data.map((ele) => (
                <Box key={ele.id}  height={"100%"} width={"100%"} >
                  <Box  key={ele.id} height={"100%"} w="100%">
                    <Image key={ele.id}  height="100%" w="100%" src={ele} />
                  </Box>
                </Box>
            ))}
          </Slider>
        </Box>
        <Box
        >
          <IconButton
            aria-label="downButton"
            
            _hover={{ bg: "none" }}
            bg={"transparent"}
            zIndex={2}
            onClick={() => slider?.slickNext()}
          >
            <ChevronDownIcon
              color="#111"
              fontSize={{
                base: "2rem",
                sm: "3rem",
                md: "3rem",
                lg: "4rem",
                xl: "5rem",
              }}
            />
          </IconButton>
        </Box>
      </Box>
      {/* <Box
        m="auto"
        p="2rem"
        w="20%"
        border={'1px solid red'}
        display={"flex"}
        alignItems={"center"}
        justifyContent="center"
      >
       
      </Box> */}
    </Box>
  );
}
