import React, { useEffect, useState } from 'react';
import { Box, styled } from "@mui/material";
import Banner from './Banner'
import BannerMid from './BannerMid';
import MidSlide from './SlideMid';
import axios from 'axios';
import Slide from './Slide';
// import { getProducts } from "../../redux/actions/productActions";
// import { useDispatch, useSelector } from "react-redux";


const BoxWrapper = styled(Box)`
  background: #f2f2f2;
  padding: 10px 10px;
`;

const getData = () => {
  axios
  .get("http://localhost:8000/products")
  .then(data => console.log(data.data))
  .catch(error => console.log(error));
  };


function Homepage() {
  const [data,setData] = useState([]);

  useEffect(() => {
    setData(getData())
  }, []);

  console.log(data)

  return (
    <div>
        <BoxWrapper>
            <Banner />
            <BannerMid />
            
            {/* <MidSlide products={data} title="Deal of the Day" timer={false} /> */}
            {/* <Slide products={data} title="Discounts for you" timer = {false} /> */}
        </BoxWrapper>
    </div>
  )
}

export default Homepage