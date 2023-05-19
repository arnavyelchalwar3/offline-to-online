import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Beauty.css';
import makeup from './image1.png';
import lady from './image6.png';

function Beauty() {
  return (
    <>
      <Navbar />
      <div class="card-container">
          <div>
            <div>
            <h1 className='shop-name'>COSMATIC PRODUCT</h1>
            </div>
            <div>
            <img src={makeup} className='frist-img ' />
            </div>
          </div>

       
        
        <div className="address">
          <span > <b>Vist : Vasude Nagar ,<br />    Higna Road ,Nagpur   </b>        </span>
        </div>

          <div className='parent'>
          <div className='text-1'>
              <span>
                 Phone Number :📞8767487235<br/>
                 Email : 📧harhedau4@gmail.com
              </span>
             </div>
          <div className='child'>

            <img src={lady} className='second-img ' />
             </div>

        </div>
      
      </div>
      <Footer />
    </>
  )
}

export default Beauty;