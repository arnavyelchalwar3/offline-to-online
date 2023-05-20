import React from 'react'
import "./Footer.css"
import { Form, Link } from 'react-router-dom'

//image import 
import app1 from './instagram (3).png'
import app2 from './twitter.png'
import app3 from './youtube (1).png'
function Footer() {
  return (
    <>
<div className='footer-container bg-dark'>
  <div className='footer-container-child'>
    <div className='footer-heading'>
   <h1>OFFLINE TO ONLINE</h1>
   </div>
   <div className='nav-cont'>
   <a href='./Form.js' className='footer-link'>Home</a>
   <a href='./Form.js' className='footer-link'>Register</a>
   <a href='./Form.js' className='footer-link'>Contact</a>
   <a href='./Form.js' className='footer-link'>About us</a>

   </div>
   <div className='footer-logo-cont'>
    <div className='fooetr-logo'> <img src={app2}></img></div>
    <div className='fooetr-logo'> <img src={app1}></img></div>
    <div className='fooetr-logo'> <img src={app3}></img></div>
   </div>
   </div>
  </div>


    </>
  )
}

export default Footer