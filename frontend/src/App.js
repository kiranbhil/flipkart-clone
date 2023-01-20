import "./App.css";
import Productdetailspage from "./components/Productdetailspage";
import NavButtom from "./components/Navbar/NavBottom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Details /> 
      <Navbar/>
      <NavButtom/>
      <Productdetailspage />
    </div>
  );
}

export default App;
