import { Box, styled } from "@mui/system";
import Slide from "./Slide";

const Component = styled(Box)`
  display: flex;
`;
const LeftSide = styled(Box)(({ theme }) => ({
  width: "83%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));
const RightSide = styled(Box)(({ theme }) => ({
  widht: "17%",
  background: "#FFFFFF",
  padding: 5,
  marginTop: 10,
  marginLeft: 10,
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const MidSlide = ({ products, title, timer }) => {
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";
  return (
    <Component>
      <LeftSide>
        <Slide products={products} title={title} timer={timer} />
      </LeftSide>
      <RightSide>
        <img
          src={adURL}
          style={{
            width: 217,
          }}
          alt="Advertisement"
        />
      </RightSide>
    </Component>
  );
};

export default MidSlide;