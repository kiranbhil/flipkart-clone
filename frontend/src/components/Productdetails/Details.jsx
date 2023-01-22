import { useEffect } from 'react';

import ProductDetail from './ProductDetail';
import "./Details.css"
import { useParams } from 'react-router-dom';
// import { getProductById } from '../../service/api';
import { useDispatch, useSelector } from 'react-redux';

import { getProductDetails } from '../../redux/actions/ProductAction';
import ActionItem from './ActionIteam';
import { Center,Box, Heading, Text, Divider } from '@chakra-ui/react';

// const Component = styled(Box)`
//     margin-top: 55px;
//     background: #F2F2F2;
// `;

// const Container = styled(Grid)(({ theme }) => ({
//     background: '#FFFFFF',
//     display: 'flex',
//     // [theme.breakpoints.down('md')]: {
//     //     margin: 0
//     // }
// }))

// const RightContainer = styled(Grid)`
//     margin-top: 50px;
//     & > p {
//         margin-top: 10px;
//     }
// `;

const Details = () => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    
    const { id } = useParams();

    const { loading, product } = useSelector(state => state.getProductDetails);
console.log(product)
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(product && id !== product.id)   
            dispatch(getProductDetails(id));
    }, [dispatch, product, id, loading]);

    return (
        <Center className='Details_of_single_product'>
            {
               product && Object.keys(product).length &&
              <Box className='Details_of_single_product_container' >
                <Box className='Details_of_single_product_container_left_child' mb={"30px"}  >
                 <ActionItem product={product} />
                </Box>
                <Box className='Details_of_single_product_container_right_child' ml={"20px"}width={"66%"} marginTop={"5px"} >
                <Text marginTop={"15px"}  color={"gray"} fontWeight={"bold"} width={"80%"}>{product.title.shortTitle}</Text>
                  <Text marginTop={"15px"} width={"80%"}>{product.title.longTitle}</Text>
                  <Heading marginTop={"15px"} style={{marginTop: 5, color: '#878787', fontSize: 14 }}>
                            <Box marginTop={"15px"} display={"flex"}>
                             <Text >8 Ratings & 1 Reviews</Text>
                            <span ><img marginTop={"15px"} src={fassured} style={{width: 77, marginLeft: 20}} /></span>
                            </Box>
                  </Heading>
                  <Box marginTop={"15px"}>
                            <span style={{ fontSize: 28}}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp; 
                            <span style={{ color: '#878787',marginTop:"15px" }}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#388E3C',marginTop:"15px" }}>{product.price.discount} off</span>
                  </Box>
                  <ProductDetail product={product} />
                </Box>
              </Box>
            }
        </Center>
    )
}

export default Details;