import "./App.css";
import NavButtom from "./components/Navbar/NavBottom";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./Routes/AllRoutes"
import Details from "./components/Productdetails/Details";
import  Productdetailspage  from "./components/Productdetails/Productdetailspage";

function App() {
  return (
    <div>
      <Navbar/>
      <NavButtom/>
       <AllRoutes />
    </div>
  );
}

export default App;
