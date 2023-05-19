import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './jewellery.css'
function Jewellery() {
  return (
  
    <>
    <Navbar/>
    <div className='poster-container bg-dark'>
  <h1 className='shop-name'>name of the shop</h1>
                  <p className='blockquote-footer dis-sty'>discription about shop</p>
   <div className='part-cont'>
          <div className='part-1'>
      <img src='./image\jewellary-img\png2.png' className='png-sty'/>
      </div>
      <div className='part-2'>
        <p>containt</p>
      </div>
      <div className='part-3'>
    
      </div>
   </div>
  <div className='address-cont'>
    <span>talmale layout butibori nagpur<br/>nagpur 441108</span>
  </div>
  </div>
 
    </>
  )
}

export default Jewellery;