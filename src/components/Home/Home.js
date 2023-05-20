import React from 'react'
import Navbar from '../Navbar/Navbar'
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
     <a href="" class="btn btn-success">Register</a>
    </section><br/>
    <Cards/>
    <Accordions/>
<Footer/>


   </>
  )
}

export default Home