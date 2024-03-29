import { useState } from 'react';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import { Button, Center } from '@chakra-ui/react';
import axios from 'axios';
import "./Details.css"


const ActionItem = ({ product }) => {
    const navigate = useNavigate();
    const { id } = product;
        
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

  

    const addItemToCart = () => {
        const cartdata={url: product.url,
            detailurl: "Hello",
            price: product.price,
            title: product.title,
            quantity: product.quantity,
            description: product.description,
            tagline: product.tagline,quant:1
        }

        axios.post("https://concerned-rose-bighorn-sheep.cyclic.app/addtocart",cartdata)
        .then(()=>navigate("/cart"))
        .catch((res)=>console.log(res))
    }


    return (
        <Box>
            <img  src={product.url} style={{width:"100%"}} />
            <br />
            <Center><Button onClick={addItemToCart}  style={{ padding:" 10px 60px", marginTop:"20px", background: '#ff9f00',color: '#FFF'}} >Add to Cart</Button></Center>
        </Box>
    )
}

export default ActionItem;