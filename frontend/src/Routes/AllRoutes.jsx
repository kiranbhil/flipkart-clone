import Homepage from '../components/Home/Homepage';
import { Route, Routes } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react';
import BasicStatistics from '../components/Product/Products';
import AdminPage from '../components/Admin/AdminPage';
import Details from '../components/Productdetails/Details';
import MainCart from "../components/cart/mainCart"
import Copyright from "../components/checkout/Copyright"
import Login from "../components/Login/Login";
import Signup from "../components/Login/SignUp";


const AllRoutes = () => {
  
    return (
      <div>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/products' element={<ChakraProvider> <BasicStatistics /></ChakraProvider>}></Route>
          <Route path='/cart' element={<MainCart />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/products/product/:id' element={<ChakraProvider> <Details /></ChakraProvider>}></Route>
          <Route path='/admin' element={<AdminPage/>}></Route>
          <Route path='/product/:id' element={<ChakraProvider> <Details /></ChakraProvider>}></Route>
          <Route path="/checkout" element={<Copyright />} />
        </Routes>
      </div>
    )
  }
  
  export default AllRoutes