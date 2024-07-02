'use client';
import React, { useEffect } from 'react';
//= Scripts
import initFullNavbarMenu from "@/common/initFullNavbarMenu";

function NavbarFullMenu({ theme }) {
  useEffect(() => {
    initFullNavbarMenu();
  }, []);

  return (
    <>
      <div id="navi" className={`topnav ${theme ? (theme === 'light' ? 'light' : '') : ''}`}>
        <div className="container-fluid">
          <div style={{width:150,marginBottom:-100}}>
            <a href="#0" >
              {
                theme === 'light' ?
                  <img src="/img/logo-light.png" width={200} alt="logo" />
                  :
                  <img src="/img/logo-light.png" width={200} alt="logo" />
              }
            </a>
          </div>
          <div className="menu-icon">
            <span className="icon">
              <i></i>
              <i></i>
            </span>
            <span className="text" data-splitting>
              <span className="menu-text">Menu</span>
            </span>
          </div>
        </div>
      </div>

      <div className="hamenu">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8">
              <div className="menu-links">
                <ul className="main-menu">
                  <li>

                    <div className="o-hidden">
                      <a className="link" href="/homepage/home4-light">
                        <span className="nm">02.</span>Home
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <a className="link" href="/about/about-light">
                        <span className="nm">02.</span>About Us
                      </a>
                    </div>
                  </li>
                  <li>
                  <div className="o-hidden">
                      <a className="link" href="/showcase/showcase-light">
                        <span className="nm">02.</span>Works
                      </a>
                    </div>

                  </li>

                  <li>
                    <div className="o-hidden">
                      <a className="link" href="/contact/contact-light">
                        <span className="nm">05.</span>Contact
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="cont-info">

                <div className="item">
                  <h6>Email :</h6>
                  <p>
                    <a href="#0">hello@gatkod@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavbarFullMenu