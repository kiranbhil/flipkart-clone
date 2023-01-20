import AllRoutes from './Routes/AllRoutes';
import NavButtom from "./components/Navbar/NavBottom";
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer';

function App() {
  return (
    <div>

      <Navbar/>
      <NavButtom/>
       <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
