import "./App.css";
import AllRoutes from "./Routes/AllRoutes"
import Details from "./components/Productdetails/Details";
import Navbar from "./components/Home/Navbar";
import Footer from "./components/Home/Footer"
import  Productdetailspage  from "./components/Productdetails/Productdetailspage";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <ChakraProvider><Navbar/></ChakraProvider>
       <AllRoutes />
       <ChakraProvider><Footer/></ChakraProvider>
    </div>
  );
}

export default App;
