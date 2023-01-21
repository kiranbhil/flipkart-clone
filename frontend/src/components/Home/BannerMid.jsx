import { Grid, styled } from "@mui/material";

const imageURL = [
    "https://rukminim1.flixcart.com/flap/960/960/image/280f4c9921a571d5.png?q=50",
    "https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg?q=50",
    "https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50",
  ];


const Component = styled(Grid)`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
`;


const BannerMid = () => {
  return (
    <>
      <Component container>
        {imageURL.map((image) => (
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <img
              src={image}
              alt="images"
              style={{
                width: "98%",
              }}
            />
          </Grid>
        ))}
      </Component>
    </>
  );
};

export default BannerMid;
