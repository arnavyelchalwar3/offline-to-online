import React from 'react' 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <> 
  <nav class="navbar  bg-warning ">
  <div class="container-fluid">
    <Link class="navbar-brand" to=''>OTO (Offline To Online)</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="./components\Home\Home.js">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="#">Link</Link>
          </li>
          <li class="nav-item dropdown">
            <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              More Pages
            </Link>
            <ul class="dropdown-menu">
              <li><Link class="dropdown-item" to='./Form\Form.js'>Register</Link></li>
              <li><a class="dropdown-item" href="#"> <i class="bi bi-person-circle"></i>login</a></li>
              <li>
                <hr class="dropdown-divider"/>
              </li>
              <li><Link class="dropdown-item" href="#">our Team</Link></li>
              <li><Link class="dropdown-item" href="#">contact us</Link></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>



    </>
  );
}

export default Navbar