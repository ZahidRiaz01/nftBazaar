
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './Component/Navbar/Navbars';
import Mint from './Component/Mint/Mint';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MyCollection from './Component/MY-Collection/MyCollection';
import Home from './Component/Home/Home';
import HomePage from './HomePage';
import Land from './Component/Lands/Land';
import Dashboard from './Component/Dashboard/Dashboard';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path='/mint' element={<Mint />} />
          <Route exact path="/mycollection" element={<MyCollection />} />
          <Route exact path='/land' element={<Land />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
