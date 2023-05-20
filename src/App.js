import './App.css';
import Form from './components/Form/Form';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';



import Home from './components/Home/Home';
// import Jewellery from './view/Jewallary/Jewellery';
import LoginPage from './components/Login Page/Login-page';
import Suggetion from './components/Suggetion/Suggetion';
import Aboutus from './components/About us/Aboutus';
import Contact from './components/Contact us/Contact';
function App() {
  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/LoginPage' element={<LoginPage/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Aboutus' element={<Aboutus/>}/>
    <Route path='/Form' element={<Form/>} />
  </Routes>
  </BrowserRouter>
        </>
  );
}

export default App;
