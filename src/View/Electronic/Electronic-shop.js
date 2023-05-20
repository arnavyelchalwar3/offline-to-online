import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import  EelectronicImg from "./Ele-img/Eelectronic.jpg"
import LocationImg from "./Ele-img/placeholder.png";
import WhatsappImg from "./Ele-img/whatsapp.png";

import "./Electronic-shop.css"
function Electronic(){
    return(<>
    <Navbar/>
    <div className="div-main">
      <div className="main-container">
           <p className="main-heading"> Eelectronic Shop</p>  <br/>          
           
           <div className="dic-container"> <p className="dec-heading"> Get discount prices up to 50% special just for you, 
            <br/> and get dozens of other attractive prizes </p>
           </div>
           <img src={EelectronicImg}  className = "img" />
      
            <div className="Address-box" > 
               <span className="Address-text"> 
               <img src={LocationImg} className="Address-img"/>Near Wadi 24034 ,  New City Nagpur</span>
            </div>

            <div class="Discout-box">
               <span class="offer-text"> 50% <br/> OFF </span>
            </div>
            <div className="logo-container">
               <img src={WhatsappImg}  className="logo"/>
                <p className="mobile-no"> 9172319749</p>
            </div>
        </div>
      </div>
      <Footer/>
   </>);
}

export default Electronic;
    