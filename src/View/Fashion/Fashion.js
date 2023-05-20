import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Fashion.css';

import cloths from './pic3.png';
import bag from './pic5.png';
import sandal from './pic2.png'
function Fashion(){
    return(
        <>
        <Navbar/>
 <div class=" banner-container">

    <div className='img-parent'>
<div className='child-1'>
<h1 className='shop-name'> <i>NEW FASHION COLLETION </i> </h1>
</div>
<div className='child-2'>
<img src={cloths} className='pic' />
</div>
    </div>
    <div className='text'>
    <span > Address: Plot number 11,<br/>   wadi Nagpur</span>
    </div>
    <div className=' parent-2'>
        <div className='child-3'>
    <img src={bag} className='pic-2'/>
    <img src={sandal} className='pic-3'/>
    </div>
<div className='text-2'>
    <span>
        Phone Number 📞: 9867762386<br/>
        Phone Number 📞: 7756879823<br/>
        Email: leenashahare90@gmail.com
    </span>
</div>
 </div>

   
</div>


       <Footer/>
       </>
       
    )
}
export default Fashion;