
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import LoginImg from "./draw2.webp";
import "./Login-page.css"
function LoginPage(){
    return(
        <> 
         <Navbar/>
         <body className="bg-dark">
          
    <div className="container">
        <div className="row">
            <div className="col-md-7">
            <div className="d-flex">
                    <i className="bi bi-browser-chrome"></i>
                    <p className="link-a">Website:- <a href="https://www.roadtocode.org/" className="website-text">Offline-To-Online</a></p>
                  </div>
                  <div className="d-flex">
                 <img src={LoginImg}  className="draw-img"/> 
                 </div>
            </div>
            <div className="col-md-5">
        <p className="sign-text" >Sign in</p>

              <form id="form">

                <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label font-label">Email Address</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter valid email address"  required />
                  </div>
                  <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label font-label">Password</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter your password" required />
                  </div>
                  
                  <div class="text-center text-lg-start mt-4 pt-2">
            <button type="button" className="btn btn-primary btn-lg" 
             >Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account ? <a href="#!"
                className="link-danger">Register</a></p>
          </div>

                </form>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
  </body>
        </>
    );
}
export default LoginPage;