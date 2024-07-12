'use client';
import React, { useEffect, useState } from 'react';
//= Scripts
import initFullNavbarMenu, { appData } from "@/common/initFullNavbarMenu";

function NavbarFullMenu({ theme }) {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    initFullNavbarMenu(setIsOpen);
  }, []);

  return (
    <>
      <div id="navi"  className={`topnav ${theme ? (theme === 'light' ? 'light' : '') : ''}`} >
        <div className="container-fluid">
          <div style={{ width: 150, marginBottom: -100 }}>
            <a href="/home">
              <img
                src={isOpen ? appData.darkLogo : appData.lightLogo}
                width={200}
                alt="logo"
              />
            </a>
          </div>
          <div className="menu-icon" style={{ color: isOpen ? "#000" : "" }}>
            <span
              className="icon"
              style={{
                backgroundColor: isOpen ? "#000" : "",
              }}
            >
              <i></i>
              <i></i>
            </span>
            <span className="text">
              <span className="menu-text">Menu</span>
            </span>
          </div>
        </div>
      </div>

      <div className="hamenu" >
        <div className="container">
          <div className="row" style={{overflow:"scroll"}}>
            <div className="col-lg-9 col-md-8" >
              <div className="menu-links">
                <ul className="main-menu">
                  <li>

                    <div className="o-hidden">
                      <a className="link" href="/home">
                        <span className="nm">01.</span>Home
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <a className="link" href="/about">
                        <span className="nm">02.</span>About
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <a className="link" href="/showcase">
                        <span className="nm">03.</span>Case Studies
                      </a>
                    </div>

                  </li>

                  <li>
                    <div className="o-hidden">
                      <a className="link" href="/contact">
                        <span className="nm">04.</span>Contact
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
                    <a href="#0">hello@gatekod.com</a>
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