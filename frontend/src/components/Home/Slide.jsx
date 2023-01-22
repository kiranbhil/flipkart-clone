import { Button, Typography, Box, Divider, styled } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import Countdown from "react-countdown";
import { Link, useNavigate } from "react-router-dom";

const timerURL =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

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

const renderer = ({ hours, minutes, seconds }) => {
  return (
    <Box variant="span">
      {hours}:{minutes}:{seconds} Left
    </Box>
  );
};

// css

const Component = styled(Box)`
  background: #ffffff;
  margin-top: 10px;
`;
const Deal = styled(Box)`
  display: flex;
  padding: 15px 20px;
`;

const DealText = styled(Typography)`
  font-size: 22px;
  font-weight: 600;
  line-height: 32px;
  margin-right: 25px;
`;

const Timer = styled(Box)`
  display: flex;
  color: #7f7f7f;
  margin-left: 10px;
  align-items: center;
`;

const ViewButton = styled(Button)`
  margin-left: auto;
`;

const Image = styled("img")`
  width: auto;
  height: 150px;
`;

const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`;

const Slide = ({ products, title, timer }) => {
  const navigate = useNavigate()
  const viewAll = ()=>{
    navigate('/products')
  }
  return (
    <Component>
      <Deal>
        <DealText>{title}</DealText>
        {timer && (
          <Timer>
            <img
              src={timerURL}
              alt="Timer Clock"
              style={{
                width: 24,
              }}
            />
            {/* <Countdown date={Date.now() + 5.04e7} renderer={renderer} /> */}
          </Timer>
        )}

        <ViewButton onClick={viewAll} variant="contained" color="primary">
          View All
        </ViewButton>
      </Deal>
      <Divider />

      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        centerMode={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        showDots={false}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {products.map((product) => (
          <Link key={product.id} to={`product/${product.id}`} style={{ textDecoration: "none" }}>
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
          </Link>
        ))}
      </Carousel>
    </Component>
  );
};

export default Slide;