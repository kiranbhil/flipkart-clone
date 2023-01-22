import { useState } from 'react';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';
// import { payUsingPaytm } from '../../service/api';
// import { post } from '../../utils/paytm';

// import { addToCart } from '../../redux/actions/';
import { useDispatch } from 'react-redux';
import { Box,styled } from '@mui/material';
import { Button } from '@chakra-ui/react';

const LeftContainer = styled(Box)({
    minWidth: '40%',
    padding: '40px 0 0 80px',
})

const Image = styled('img')({
    padding: '15px 20px',
    border: '1px solid #f0f0f0',
    width: '95%'
});



const ActionItem = ({ product }) => {
    const navigate = useNavigate();
    const { id } = product;
        
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const buyNow = async () => {
        // let response = await payUsingPaytm({ amount: 500, email: 'codeforinterview01@gmail.com'});
        // var information = {
        //     action: 'https://securegw-stage.paytm.in/order/process',
        //     params: response    
        // }
        console.log("Buy")
    }

    const addItemToCart = () => {
        // dispatch(addToCart(id, quantity));
        navigate('/cart');
    }

    return (
        <LeftContainer>
            <Image src={product.url} />
            <br />
            <Button  style={{marginRight: 10, background: '#ff9f00',width: "46%",borderRadius:"2px",height:"50px",color: '#FFF'}} variant="contained">Add to Cart</Button>
            <Button  style={{background: '#fb641b',width: "46%",borderRadius:"2px",height:"50px",color: '#FFF'}} variant="contained"><Flash /> Buy Now</Button>
        </LeftContainer>
    )
}

export default ActionItem;