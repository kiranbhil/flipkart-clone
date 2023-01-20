import Homepage from '../components/Home/Homepage';
import Fashion from '../components/Fashion/Fashion';
import Productdetailspage from '../components/Productdetailspage';
import { Route, Routes } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react';
import EmptyCart from '../components/cart/cartemptypage';
import AdminPage from '../components/Admin/AdminPage';


const AllRoutes = () => {
  
    return (
      <div>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/fashion' element={<Fashion />}></Route>
          <Route path='/cart' element={<EmptyCart/>}></Route>
          <Route path='/admin' element={<AdminPage/>}></Route>
          <Route path='/productdetail' element={<ChakraProvider> <Productdetailspage/></ChakraProvider>}></Route>
        </Routes>
      </div>
    )
  }
  
  export default AllRoutes