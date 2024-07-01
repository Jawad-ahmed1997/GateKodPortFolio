'use client';
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
//= Scripts
import { handleDropdown, handleMobileDropdown } from "@/common/navbar";
//= Static Data
import appData from "@/data/app.json";

const Navbar = ({ lr,setTheme,theme,page }) => {

  const navbar = useRef();

  function handleScroll() {
    if (window.scrollY > 300) {
      navbar.current.classList.add("nav-scroll");
      setTheme("dark")
    } else {
      navbar?.current?.classList?.remove("nav-scroll");
      setTheme("light")
    }
  }

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav ref={navbar} className={`navbar navbar-expand-lg change ${theme  === "light" ? "" : "light"}`}>
      <div className="container">
        <Link className="logo" href="/">
          {page && theme ? (
            page === "entry" && theme==="light" ? (
              <img ref={lr} src={appData?.lightLogo} alt="logo" />
            ) : (
              <img ref={lr} src={appData.darkLogo} alt="logo" />
            )
          ) : (
            <img ref={lr} src={appData.darkLogo} alt="logo" />
          )}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
              <a
                className="nav-link"  href={'/homepage/home4-light/'}
              >
                Home
              </a>
             
            </li>
            <li className="nav-item">
              <a className="nav-link" href={`/about/about-light`}>
                About
              </a>
            </li>
            <li className="nav-item ">
            <a className="nav-link" href={`/showcase/showcase-light`}>
            Works
              </a>
             
              
              
            </li>
        
            <li className="nav-item">
              <a href={`/contact/contact-light`} className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
