import Homepage from '../components/Home/Homepage';
import Fashion from '../components/Fashion/Fashion';
import { Route, Routes } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react';
import Details from '../components/Productdetails/Details';


const AllRoutes = () => {
  
    return (
      <div>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/fashion' element={<Fashion />}></Route>
          <Route path='/product' element={<ChakraProvider> <Details /></ChakraProvider>}></Route>
        </Routes>
      </div>
    )
  }
  
  export default AllRoutes