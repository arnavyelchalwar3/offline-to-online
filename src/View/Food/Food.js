import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import burger from './img.png'
import briyani from './img-1.png'
import bike from './img-3.png'
import delivery from './img-4.png'
import './Food.css'



function Food() {
    
  
  
  return (

   
  
    
      <div >
        <Navbar/>
        <div><h1 className="heading">Explore the Food Category</h1></div>
          <div className='big-container'>
  <h1 className='c-name'>Cafe Name</h1>
                 
   <div className='part-cont'>
          <div className='part-1'>
      <img src={burger} className="png-sty"/>
      </div>
      <div className='part-2'>
        <p>Get the Delious Food at Our Door Steps🚪... </p>
      </div>
      <div><img src={briyani} className="png-sty-1"/></div>
      <div className='part-3'>
    
      </div>
   </div>
  <div className='address-cont'>
  <div class="circle">
  <span class="text"><b>50% off On</b></span> 
</div> <br/> <p className='pizza'>Pizza Burgers Fires </p>
  </div>
 <div className='row-4'> <div><img src={bike} className='bike'/>
 </div>
 <div><b className='offer'> Weoffer:- <br/>👉🏼Dinine <br/>👉🏼Take out <br/>👉🏼Home Delivery</b>
 </div>
  <div> 
    <img src={delivery} className='delivery'/>
  </div>
  </div>
  <div className='row-5'>
    <div><h5>📲Callus <br/>900883384 <br/> 8980989084<br/>8980989084</h5> 
    </div>
    <div> <b>🏠Address <br/>Aayodya Nagar uday Nagar Nit</b></div>
    <div> <b>🌍Vist our website 
     <br/>www.abc.com </b></div>
  </div>
  
  </div>
   <Footer/>
    </div>
   
  )
}

export default Food

