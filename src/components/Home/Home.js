import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Home.css"
import Footer from '../Footer/Footer';

//image import links
import img1 from './imag1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import card1 from './card-img.webp'
import card2 from './card-img2.png'
import card3 from './card-img3.webp'
//bootstrap files
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
function Home() {
  return (
   <>
  

   <Navbar/>
   <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


   <section id="header" class="jumbotron text-center">
     <h1 class="display-3">About Site</h1>
     <p class="lead">Digital Bussiness Profitable Bussiness</p>
     <a href="" class="btn btn-success">Register</a>
    
</section><br/>
  
<section id="gallery">
  <div class="container">
    <div class="row">
    <div class="col-lg-4 mb-4">
    <div class="card">
      <img src={card1} alt="" class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">Our Bussiness</h5>
        <p class="card-text">basically normal Bussiness contain some investment  and that contain matarial coast, advertisment cost,Rent for shop,and some taxes and teh main concept is advertisment and our web site work only on that </p>
       <a href="" class="btn btn-outline-success btn-sm">Read More</a>
        <a href="" class="btn btn-outline-danger btn-sm"><i class="far fa-heart">👍</i></a>
      </div>
     </div>
    </div>
  <div class="col-lg-4 mb-4">
  <div class="card">
      <img src={card2} alt="" class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">Benifite of online Bussiness</h5>
        <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!</p>
       <a href="" class="btn btn-outline-success btn-sm">Read More</a>
        <a href="" class="btn btn-outline-danger btn-sm"><i class="far fa-heart">👍</i></a>
      </div>
      </div>
    </div>
    <div class="col-lg-4 mb-4">
    <div class="card">
      <img src={card3} alt="" class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">Our Happy Coustmer</h5>
        <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!</p>
       <a href="" class="btn btn-outline-success btn-sm">Read More</a>
        <a href="" class="btn btn-outline-danger btn-sm"><i class="far fa-heart">👍</i></a>
      </div>
     </div>
    </div>
  </div>
</div>
</section>
<Footer/>


   </>
  )
}

export default Home