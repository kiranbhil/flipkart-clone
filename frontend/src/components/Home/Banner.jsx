import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { styled } from "@mui/system";

const bannerData = [
    {
      id: 1,
      url: "https://rukminim1.flixcart.com/flap/3376/560/image/d117a62eb5fbb8e1.jpg?q=50",
    },
    {
      id: 2,
      url: "https://rukminim1.flixcart.com/flap/3376/560/image/57267a180af306fe.jpg?q=50",
    },
    {
      id: 3,
      url: "https://rukminim1.flixcart.com/flap/3376/560/image/ae9966569097a8b7.jpg?q=50",
    },
    {
      id: 4,
      url: "https://rukminim1.flixcart.com/flap/3376/560/image/f6202f13b6f89b03.jpg?q=50",
    },
  ];


// css
const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: 280,
  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    height: 180,
  },
}));

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Banner = () => {
  return (
    <Carousel
      responsive={responsive}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      // removeArrowOnDeviceType={["tablet", "mobile"]}
      autoPlay={true}
      autoPlaySpeed={4000}
      keyBoardControl={true}
      infinite={true}
      slidesToSlide={1}
      swipeable={false}
      draggable={false}
    >
      {bannerData.map((banner) => (
        <Image src={banner.url} alt="banner" />
      ))}
    </Carousel>
  );
};

export default Banner;
