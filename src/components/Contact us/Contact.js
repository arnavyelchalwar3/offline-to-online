import "./Contact.css"
function Contact(){
    return(
        <>
          <body class="bg-dark">
    <div class="container">
        <div class="row">
            <div class="col-md-7">
              <h3>OTO ( Offline to Online )</h3>
              <form id="form">
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label font-label">Name</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter your name" required />
                  </div>
                  <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label font-label">Email</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter your email"  required />
                  </div>
                  <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label font-label">Contact Number</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter your number" required />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label font-label">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
                  </div>
                  <div class="mb-3">
                    <label for="formFile" class="form-label font-label">Upload Document</label>
                    <input class="form-control" type="file" id="formFile" required />
                  </div>
                  <div class="mb-3">
                     <button class="btn  btn-outline-success">Submit</button>
                     <button class="btn  btn-outline-secondary"> Back </button>
                  </div>
                </form>
            </div>
            <div class="col-md-5">
              <h4>Contact us</h4><hr />
              <div class="mt-4">
                <div class="d-flex">
                    <i class="bi bi-browser-chrome"></i>
                    <p class="link-a">Website:- <a href="https://www.roadtocode.org/">www.oto.com</a></p>
                  </div><hr/>
                  <div class="d-flex">
                    <i class="bi bi-telephone-fill"></i>
                    <p class="link-a">Contact :- <a href="tel:9172319749">9172319749</a></p>
                  </div><hr/>
                  <div class="d-flex">
                    <i class="bi bi-envelope-fill"></i>
                    <p class="link-a">Email:- <a href="mailto:gkusumbe7@gmail.com">oto@gmail.com</a></p>
                  </div><hr/>
                  <div class="d-flex">
                    <i class="bi bi-geo-alt-fill"></i>
                    <p class="link-a">Address: OTO,Temple Bazar Road, Nagpur, Maharashtra 440012 </p>
                  </div><hr/>
                  <div class="d-flex">
                  <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980777.560695
                  4987!2d75.94750721102605!3d14.153364207152547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13
                  .1!3m3!1m2!1s0x3bb77fd95d4be823%3A0x6e52e05076df36b8!2sHampi%2C%20Karnataka%20583239
                  !5e0!3m2!1sen!2sin!4v1660835732262!5m2!1sen!2sin" width="250"></iframe>
                  </div><hr/>
                  </div>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
  </body>

        </>
    )
};

export default Contact;
