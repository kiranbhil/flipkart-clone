import { useEffect } from 'react';

import ProductDetail from './ProductDetail';
import "./Details.css"
import { useParams } from 'react-router-dom';
// import { getProductById } from '../../service/api';
import { useDispatch, useSelector } from 'react-redux';

import { getProductDetails } from '../../redux/actions/ProductAction';
import ActionItem from './ActionIteam';
import { Center,Box, Heading, Text } from '@chakra-ui/react';

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
                <Box className='Details_of_single_product_container_left_child' item lg={4} md={4} sm={8} xs={12}>
                 <ActionItem product={product} />
                </Box>
                <Box className='Details_of_single_product_container_right_child' item lg={8} md={8} sm={8} xs={12}>
                  <Text>{product.title.longTitle}</Text>
                  <Heading style={{marginTop: 5, color: '#878787', fontSize: 14 }}>
                            8 Ratings & 1 Reviews
                            <span><img src={fassured} style={{width: 77, marginLeft: 20}} /></span>
                  </Heading>
                  <Text>
                            <span style={{ fontSize: 28 }}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp; 
                            <span style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#388E3C' }}>{product.price.discount} off</span>
                  </Text>
                  {/* <ProductDetail product={product} /> */}
                </Box>
              </Box>
            }
            {/* { product && Object.keys(product).length &&
                <Box> 
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItem product={product} />
                    </Grid>
                    <Box item lg={8} md={8} sm={8} xs={12}>
                        <Typography>{product.title.longTitle}</Typography>
                        <Typography style={{marginTop: 5, color: '#878787', fontSize: 14 }}>
                            8 Ratings & 1 Reviews
                            <span><img src={fassured} style={{width: 77, marginLeft: 20}} /></span>
                        </Typography>
                        <Typography>
                            <span style={{ fontSize: 28 }}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp; 
                            <span style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#388E3C' }}>{product.price.discount} off</span>
                        </Typography>
                        <ProductDetail product={product} />
                    </Box>
                </Box>
            }    */}
        </Center>
    )
}

export default Details;