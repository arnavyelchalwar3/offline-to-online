

import './Grocery.css';
import fruit from './img1.png'
import vegi from './img2.png'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function Grocery() {
    return (
      <>
      <Navbar/>
     <div className="Grocery-Card"  >
     
      <i><b><h1 className='app-header'> Super </h1></b></i>
      <i><h1 className='app-header1'>GROCERY Store</h1></i>
          
      <div className='container'>
      <div className='cont1'>
          <img src={vegi} className='rmage'/>
         

        </div>
        </div>
       
        <div className='cont2'>
          <img src={fruit} className='img'/>
          
      </div> 

      <div className='button'>
<button class="btn-roll">Order Now</button>
</div>
     <div className='parent-container'>
    <div className='text-2'>
    <span>
        Call to find out more <br/>
        +000 873 2456 📞
   </span>
   </div>

   <div>
   <span className='text-3'>
    Address<br/>
    
   </span>
   </div>
   </div>



      </div> 
      <Footer/> 
      </>
    )
  }
  
  export default Grocery;