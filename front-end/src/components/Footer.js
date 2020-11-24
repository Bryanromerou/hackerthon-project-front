import React from 'react';

const Footer = () => {
  return (
    <>
  <div className="page-footer font-small pt-4">
    <div className="container-fluid text-center text-md-left">
      <div className="row">


        <hr className="clearfix w-100 d-md-none pb-3"/>
        <div className="col-md-3 mb-md-0 mb-3">

          <h5 className="text-uppercase">SITEMAP</h5>

          <ul className="list-unstyled">
            <li>
              <a className="footer-link" href="#!">ABOUT US</a>
            </li>
            <li>
              <a className="footer-link" href="#!">OUR WORK</a>
            </li>
            <li>
              <a className="footer-link" href="#!">CONTACT US</a>
            </li>
            <li>
              <a className="footer-link" href="#!">CLIENT LOGIN</a>
            </li>
          </ul>

        </div>
        <div class="col-md-3 mb-md-0 mb-3">
          <h5 class="text-uppercase">LOCATION</h5>

          <ul class="list-unstyled">
            <li>
              <span href="#!">202 SOS Ave</span>
            </li>
            <li>
              <span href="#!">Antartica, Antartica</span>
            </li>
            <li>
              <span href="#!">96598</span>
            </li>
          </ul>
        </div>
        <div className="footer-desc col-md-4 mt-md-0 mt-3">
          <h5>You don’t have to brave the constant newscycle alone. We’re here for you, not only to reel in relevant news, but to provide you with options for self-care.</h5>

        </div>
    </div>
    <div className="footer-copyright text-center py-3">© 2020 Copyright SOS</div>
  </div>
  </div>
  </>
)
}

export default Footer