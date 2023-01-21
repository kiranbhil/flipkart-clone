import Homepage from '../components/Home/Homepage';
import Fashion from '../components/Fashion/Fashion';
import { Route, Routes } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react';
import Products from '../components/Product/Product';
import Productdetailspage from '../components/Productdetails/Productdetailspage';
import EmptyCart from '../components/cart/cartemptypage';


const AllRoutes = () => {
  
    return (
      <div>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/fashion' element={<Fashion />}></Route>
<<<<<<< HEAD
          <Route path='/product' element={<ChakraProvider> <Details /></ChakraProvider>}></Route>
=======
          <Route path='/cart' element={<EmptyCart />}></Route>
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/products/product/:id' element={<ChakraProvider> <Productdetailspage /></ChakraProvider>}></Route>
          <Route path='/product/:id' element={<ChakraProvider> <Productdetailspage /></ChakraProvider>}></Route>
>>>>>>> 79263a4c97c9ff75154dd331b8897ea808083e7b
        </Routes>
      </div>
    )
  }
  
  export default AllRoutes