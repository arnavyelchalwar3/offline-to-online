import React from 'react'
import './Aboutus.css'
//team member image import
import HARSHADA from './harshada.jpg'
import PRATIK from './pratik.jpg'
import LEENA from './leena.jpg'
import TANNU from './tannu.jpg'
import KIRTI from './kirti.jpg'
//import KALASH from './.jpg'//
import RAHUL from './rahul.jpeg'
import GANESH from './ganesh.jpg'
import ARNAV from './arynav.jpg'
import Github from './github.png'
import Linkdin from './linkedin.png'


function Aboutus() {
  return (
   <>

    <div class="review" id="Review">
        <h1>OUR<span>TEAM</span></h1>

        <div class="review_box">
            <div class="review_card">

                <div class="review_profile">
                    <img src={PRATIK}/>
                </div>

                <div class="review_text">
                    <h2 class="name">PRATIK BHOYAR</h2>

                    <div class="review_icon">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>

                    <div class="review_social">
                        <i class="fa-brands fa-github"></i> 
                        <i class="fa-brands fa-linkedin-in"></i>
                    </div>

                    <p>
                    Currently persuing BCA from gh Raisoni University Amravati and currently persuing  Full stack Development course from RTC 
                    </p>

                </div>
                <div className="social-account">
            <ul>
                <li><a href=" https://github.com/PB220-DEVLOP" target="blank"><img className="social-img" src={Github}/></a></li>
                <li><a href="https://www.linkedin.com/in/pratik-bhoyar-1b1176198/       " target="blank"><img className="social-img" src={Linkdin}/></a></li>
            </ul>
        </div>
            </div>

            <div class="review_card">

                <div class="review_profile">
                    <img/>
                </div>

                <div class="review_text">
                    <h2 class="name">KALASH GADHAVE</h2>

                    <div class="review_icon">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>

                    <div class="review_social">
                        <i class="fa-brands fa-github"> </i>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </div>

                    <p>
                    Currently persuing BCA from gh Raisoni University Amravati
                            currently persuing  Full stack Development course from RTC
                    </p>

                </div>
                <div className="social-account">
            <ul>
                <li><a href="https://github.com/Prajakta1812" target="blank"><img className="social-img" src={Github}/></a></li>
                <li><a href="https://youtube.com" target="blank"><img className="social-img" src={Linkdin}/></a></li>
            </ul>
        </div>
            </div>

            <div class="review_card">

                <div class="review_profile">
                    <img src={RAHUL}/>
                </div>

                <div class="review_text">
                    <h2 class="name">RAHUL GUNDKAR</h2>

                    <div class="review_icon">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>

                    <div class="review_social">
                        <i class="fa-brands fa-github"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </div>

                    <p>
                    Currently persuing BCA from gh Raisoni University Amravati
currently persuing  Full stack Development course from RTC
                    </p>

                </div>
                <div className="social-account">
            <ul>
                <li><a href="https://github.com/rahulgundkar" target="blank"><img className="social-img" src={Github}/></a></li>
                <li><a href="https://www.linkedin.com/in/rahul-gundkar-815315246" target="blank"><img className="social-img" src={Linkdin}/></a></li>
            </ul>
        </div>
            </div>

            <div class="review_card">

                <div class="review_profile">
                    <img src={KIRTI}/>
                </div>

                <div class="review_text">
                    <h2 class="name">KIRTI RATHOD</h2>

                    <div class="review_icon">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>

                    <div class="review_social">
                        <i class="fa-brands fa-github"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </div>

                    <p>
                    I am currently pursuing BE (3<sup> rd</sup> year) in PCE.nagpur
                    </p>

                </div>
                <div className="social-account">
            <ul>
                <li><a href="https://github.com/Kirteerathod" target="blank"><img className="social-img" src={Github}/></a></li>
                <li><a href="https://www.linkedin.com/in/Kirtee-rathod-04a461236" target="blank"><img className="social-img" src={Linkdin}/></a></li>
            </ul>
        </div>
            </div>

            <div class="review_card">

                <div class="review_profile">
                    <img src={TANNU}/>
                </div>

                <div class="review_text">
                    <h2 class="name">TANNU KUREKAR</h2>

                    <div class="review_icon">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>

                    <div class="review_social">
                        <i class="fa-brands fa-github"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </div>

                    <p>
                    Currently studying BCA from gh raisoni University Amravati
                    Currently pursuing Full stack development course from RTC
                    </p>

                </div>
                <div className="social-account">
            <ul>
                <li><a href="https://github.com/tannukurekar" target="blank"><img className="social-img" src={Github}/></a></li>
                <li><a href=" https://www.linkedin.com/in/tannu-kurekar-a80529275" target="blank"><img className="social-img" src={Linkdin}/></a></li>
            </ul>
        </div>
            </div>

            <div class="review_card">

                <div class="review_profile">
                    <img src={LEENA}/>
                </div>

                <div class="review_text">
                    <h2 class="name">LEENA SAHARE</h2>

                    <div class="review_icon">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>

                    <div class="review_social">
                        <i class="fa-brands fa-github"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </div>

                    <p>
                    Currently studying BCA from GH Raison University Amravati
                       Currently pursuing Full stack developement course from RTC
                    </p>

                </div>
                <div className="social-account">
            <ul>
                <li><a href="https://github.com/Leena200" target="blank"><img className="social-img" src={Github}/></a></li>
                <li><a href=" https://www.linkedin.com/in/leena-shahare-b79566272" target="blank"><img className="social-img" src={Linkdin}/></a></li>
            </ul>
        </div>
            </div>

            <div class="review_card">

                <div class="review_profile">
                    <img src={ARNAV}/>
                </div>

                <div class="review_text">
                    <h2 class="name">ARNAV YELCHALWAR</h2>

                    <div class="review_icon">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>

                    <div class="review_social">
                        <i class="fa-brands fa-github"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </div>

                    <p>
                    Currently studying Master's of Computer Applications from gh raisoni University Amravati
                        Currently pursuing Full stack development course from RTC
                    </p>

                </div>
                <div className="social-account">
            <ul>
                <li><a href="https://github.com/arnavyelchalwar3" target="blank"><img className="social-img" src={Github}/></a></li>
                <li><a href="https://in.linkedin.com/in/arnav-yelchalwar-79aa2725a" target="blank"><img className="social-img" src={Linkdin}/></a></li>
            </ul>
        </div>
            </div>

            <div class="review_card">

                <div class="review_profile">
                    <img src={GANESH}/>
                </div>

                <div class="review_text">
                    <h2 class="name">GANESH</h2>

                    <div class="review_icon">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>

                    <div class="review_social">
                        <i class="fa-brands fa-github"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </div>

                    <p>
                        
                    </p>

                </div>
                <div className="social-account">
            <ul>
                <li><a href=" https://github.com/gkusumbe7" target="blank"><img className="social-img" src={Github}/></a></li>
                <li><a href=" https://www.linkedin.com/in/ganesh-kusumbe-382888186" target="blank"><img className="social-img" src={Linkdin}/></a></li>
            </ul>
        </div>
            </div>

            

            <div class="review_card">

                <div class="review_profile">
                    <img src={HARSHADA}/>
                </div>

                <div class="review_text">
                    <h2 class="name">HARSHADA</h2>

                    <div class="review_icon">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>

                    <div class="review_social">
                        <i class="fa-brands fa-github"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </div>

                    <p>
                       
                    </p>

                </div>
                <div className="social-account">
            <ul>
                <li><a href="https://github.com/gkusumbe7" target="blank"><img className="social-img" src={Github}/></a></li>
                <li><a href="https://www.linkedin.com/in/harshada-hedau-0833a6275" target="blank"><img className="social-img" src={Linkdin}/></a></li>
            </ul>
        </div>
            </div>
            <div class="review_card">

<div class="review_profile">
<img src=""/>
</div>

<div class="review_text">
    <h2 class="name">NILESH BOKDE</h2>

    <div class="review_icon">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
    </div>

    <div class="review_social">
        <i class="fa-brands fa-github"></i>
        <i class="fa-brands fa-linkedin-in"></i>
    </div>

    <p>
    Currently working as a System Engineer in Infosys and currently learning  Full stack Development course from RTC
    </p>

</div>
<div className="social-account">
            <ul>
                <li><a href="https://github.com/Nileshbokde8" target="blank"><img className="social-img" src={Github}/></a></li>
                <li><a href="https://www.linkedin.com/in/nilesh-bokde-451b53266" target="blank"><img className="social-img" src={Linkdin}/></a></li>
            </ul>
        </div>
</div>


        </div>

    </div>
   </>
  )
}

export default Aboutus