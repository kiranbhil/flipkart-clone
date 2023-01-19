import './App.css';
import Productdetailspage from './components/Productdetailspage';
import { BrowserRouter, Route } from 'react-router-dom';
import Details from './components/Details';

function App() {
  return (
    <div>
      {/* <Productdetailspage /> */}
            <Details /> 
    </div>
  );
}

export default App;
