import Homepage from '../components/Home/Homepage';
import { Route, Routes } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react';
import BasicStatistics from '../components/Product/Products';
import Productdetailspage from '../components/Productdetails/Productdetailspage';
import EmptyCart from '../components/cart/cartemptypage';
import AdminPage from '../components/Admin/AdminPage';
import Details from '../components/Productdetails/Details';


const AllRoutes = () => {
  
    return (
      <div>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/products' element={<ChakraProvider> <BasicStatistics /></ChakraProvider>}></Route>
          <Route path='/cart' element={<EmptyCart />}></Route>
          {/* <Route path='/products' element={<Products/>}></Route> */}
          <Route path='/products/product/:id' element={<ChakraProvider> <Details /></ChakraProvider>}></Route>
          {/* <Route path='/product/:id' element={<ChakraProvider> <Details /></ChakraProvider>}></Route> */}
          <Route path='/admin' element={<AdminPage/>}></Route>
          {/* <Route path='/fashion' element={<Fashion />}></Route> */}
          <Route path='/product/:id' element={<ChakraProvider> <Details /></ChakraProvider>}></Route>
        </Routes>
      </div>
    )
  }
  
  export default AllRoutes