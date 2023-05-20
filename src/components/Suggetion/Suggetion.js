import React from "react";

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Suggetion.css'


function Suggetion(){
   
    return(
        
        <>
        <Navbar />
        <div class="Suggest-container">
        <h1> <u> Suggestion </u></h1>
        <form action="#">
            <input type text="text" name="Full Name " placeholder=" FullName... " required />
            <input type text="email" name= "Email " placeholder=" Email... "  required/>
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="suggestion" id="" cols="30" rows="10" placeholder=" Give Your Suggestion Here..."></textarea>
            <br />
            <button > Send Message </button>


        </form>
        
    </div>
    <Footer/> 
        </>
    );
}

export default Suggetion;