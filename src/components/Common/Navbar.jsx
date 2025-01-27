"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
//= Scripts
import { handleDropdown, handleMobileDropdown } from "@/common/navbar";
//= Static Data
import appData from "@/data/app.json";

const Navbar = ({ lr, themeMode }) => {
  const [theme, setTheme] = useState(themeMode);
  const navbar = useRef();

  function handleScroll() {
    if (window.scrollY > 300) {
      navbar.current.classList.add("nav-scroll");
      setTheme("dark");
    } else {
      if (themeMode === "dark") {
        navbar?.current?.classList?.remove("nav-scroll");
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
  }

  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, null, `#${targetId}`);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [themeMode]);

  useEffect(() => {
    setTheme(themeMode);
  }, [themeMode]);

  return (
    <nav
      ref={navbar}
      className={`navbar navbar-expand-lg change ${
        theme === "light" ? "" : "light"
      }`}
    >
      <div className="container">
        <Link className="logo" href="/home">
          {theme ? (
            theme === "light" ? (
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
            <li className="nav-item">
              <a
                className="nav-link"
                href=""
                onClick={(e) => smoothScroll(e, "home")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#about"
                onClick={(e) => smoothScroll(e, "about")}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#showcase"
                onClick={(e) => smoothScroll(e, "showcase")}
              >
                Case Studies
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#team"
                className="nav-link"
                onClick={(e) => smoothScroll(e, "team")}
              >
                {" "}
                 Our Team
              </a>
            </li>
            <div className="sub-title mt-3 mx-4">
              <h6>
                {" "}
                <a href="#contact" onClick={(e) => smoothScroll(e, "contact")}>
                  contact us
                </a>
              </h6>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
