import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
//images import
import ring from './png2.png'
import gold from './png4.png'
import girl from './png1.png'
import './jewellery.css'
function Jewellery(props) {
  return (
  
    <>
    <div className='container-xl poster-container bg-dark'>
  <h1 className='shop-name'>{props.shopname}</h1>
                  <p className='blockquote-footer dis-sty'>{props.owner}</p>
   <div className='part-cont'>
          <div className='part-1'>
      <img src={ring} className='png-sty'/>
      </div>
      <div className='part-2'>
        <p >containt</p>
      </div>
      <div className='girl-img-cont'>
     <img src={girl} className='girl-img'/>
     </div>
   </div>
   <div className='address-bar'>
   <span > talmal layout plot 53 <br/> butibori nagpur 441108 </span>
   </div>
   <div className='gold-cont'>
   <img src={gold} className='gold'/>
   </div>
   <div className='contact-cont'>
   <span className='contact'>Mobile Number</span><i class="bi bi-telephone"></i>:-8975434272<br/>
   <span className='contact'>Alt Mobile Number</span>  <i class="bi bi-telephone"></i>:-9823000990<br/>
   <span className='contact'>Mail</span>  <i class="bi bi-envelope"></i>:-{props.email}<br/>
   </div>
  </div>
 
    </>
  )
}

export default Jewellery;