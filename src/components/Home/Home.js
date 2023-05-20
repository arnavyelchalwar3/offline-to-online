import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom';
import "./Home.css"
import Footer from '../Footer/Footer';
import CarouselFade from './Carousel';
import Cards from './Cards';
import Accordions from './Accordion';


//bootstrap files

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
function Home() {
  return (
   <>
  

   <Navbar/>
   <CarouselFade/>
   <section id="header" class="jumbotron text-center">
     <h1 class="display-3">About Site</h1>
     <p class="lead">Digital Bussiness Profitable Bussiness</p>
     <Link to={"/Form"} class="btn btn-success]">Register</Link>
    </section><br/>
    <Cards/>
    <Accordions/>
<Footer/>


   </>
  )
}

export default Home