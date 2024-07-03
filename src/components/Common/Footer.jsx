import React from 'react';

function Footer({ hideBGCOLOR }) {
  return (
    <footer className={`${!hideBGCOLOR ? 'sub-bg' : ''}`}>
      <div className="container">
        <div className="row">
        <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                
                <img src="/img/logo-light.png" alt="logo" />
              </div>
              <div className="social">
                <a target='blank' href="https://www.facebook.com/gatekod">
                  <i className="fab fa-facebook-f"></i>
                </a>
              
                <a target='blank' href="https://www.linkedin.com/company/gatekod/people/">
                  <i className="fab fa-linkedin"></i>
                </a>
               
              </div>
              {/* <div className="copy-right">
                <p>
                  © 2023, Vie Template. Made with passion by <a href="#0">ThemesCamp</a>.
                </p>
              </div> */}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50 md-mt50">
              <ul> 
                <li>
                  <div className="subscribe">
                    <input type="text" placeholder="Type Your Email" />
                    <span className="subs pe-7s-paper-plane"></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50 ">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                {/* <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Officeal Address</h6>
                    <p>504 White St . Dawsonville, GA 30534 , New York</p>
                  </div>
                </li> */}
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>hello@gatekod.com
                    </p>
                  </div>
                </li>
                {/* <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>+87986451666</p>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
          
         
          
        </div>
      </div>
    </footer>
  )
}

export default Footer