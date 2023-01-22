import Homepage from '../components/Home/Homepage';
import Fashion from '../components/Fashion/Fashion';
import { Route, Routes } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react';
import Products from '../components/Product/Product';
import Productdetailspage from '../components/Productdetails/Productdetailspage';
import EmptyCart from '../components/cart/cartemptypage';
import Details from '../components/Productdetails/Details';


const AllRoutes = () => {
  
    return (
      <div>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/fashion' element={<Fashion />}></Route>
          <Route path='/product/:id' element={<ChakraProvider> <Details /></ChakraProvider>}></Route>
        </Routes>
      </div>
    )
  }
  
  export default AllRoutes