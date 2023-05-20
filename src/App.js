import './App.css';
import From from './components/Form/Form';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';



import Home from './components/Home/Home';
import Jewellery from './view/Jewallary/Jewellery';
import LoginPage from './components/Login Page/Login-page';
import Suggetion from './components/Suggetion/Suggetion';
import Aboutus from './components/About us/Aboutus';
function App() {
  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
  </Routes>
  </BrowserRouter>
        </>
  );
}

export default App;
