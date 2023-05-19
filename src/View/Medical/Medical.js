import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import './Medical.css'


import medicine from "./medical1.png"
import microscope from "./medical2.png"

//bootstrap files
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function Medical(){
   

    return(
       <>
       
  <nav class="navbar navbar-dark bg-dark ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Offline-To-Online(OTO)</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider"/>
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
 
<div class="poster">
        <div class="header">
            <h1>🧑‍🔬 MEDICAL STORE 🧑‍🔬</h1>
        </div>
        <div class="wrapper">
            <div class="colume-left"> 
                <img src={medicine}/>
           </div>
            <div class="colume-right"> 
                <h2> about uv radiation</h2>
                <p> did you know that too much sun can damage the eyes? this is due to the suns uv radiation </p>
         </div>
        </div>
        <div class="info">
         <h2>your eyes can be protected wearing sunglasses or wide brimmed hat.</h2>
         <img src={microscope}/>
         <div className='user-info'>
          <div><p>  Name:kirtee Rathod<br /> E-mail:kirtir661@gmail.com   </p> </div>
          <div> <p>  Phone No:7218698831 <br />  Address: Nagpur <br />    </p></div>
         </div>
         
        </div>
      </div>
     

      <div className='footer-container bg-dark'>
  <div className='footer-container-child'>
    <div className='footer-heading'>
   <h1>OFFLINE TO ONLINE</h1>
   </div>
   <div className='nav-cont'>
   <a href='./Form.js' className='footer-link'>Form</a>
   <a href='./Form.js' className='footer-link'>Form</a>
   <a href='./Form.js' className='footer-link'>Form</a>
   <a href='./Form.js' className='footer-link'>Form</a>

   </div>
   <div className='footer-logo-cont'>
    <div className='fooetr-logo'> <img src='./image\footer-img\twitter.png'></img></div>
    <div className='fooetr-logo'> <img src='./image\footer-img\instagram (3).png'></img></div>
    <div className='fooetr-logo'> <img src='./image\footer-img\youtube (1).png'></img></div>
   </div>
   </div>
  </div>
     
       </>
    )
}

export default Medical