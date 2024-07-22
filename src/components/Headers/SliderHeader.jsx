"use client";
import React, { useEffect, useRef } from "react";
//= Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Parallax } from "swiper";
//= Scripts
import removeSlashFromBagination from "@/common/removeSlashpagination";
import fadeWhenScroll from "@/common/fadeWhenScroll";
//= Static Data
import intro1Data from "@/data/intro1.json";

const swiperOptions = {
  modules: [Parallax, Navigation, Pagination],
  speed: 2000,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  parallax: true,
  pagination: {
    type: "fraction",
    clickable: true,
    el: ".swiper-pagination",
  },
  onSwiper: (swiper) => {
    for (var i = 0; i < swiper.slides.length; i++) {
      swiper.slides[i].childNodes[0].setAttribute(
        "data-swiper-parallax",
        0.75 * swiper.width
      );
    }
  },
};
const smoothScroll = (e, targetId) => {
  e.preventDefault();
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, null, `#${targetId}`);
  }
}; 

function SliderHeader() {
  const fixedSlider = useRef();

  useEffect(() => {
    removeSlashFromBagination();
    fadeWhenScroll(document.querySelectorAll(".fixed-slider .caption"));
  }, []);

  useEffect(() => {
    if (fixedSlider.current) {
      const MainContent = document.querySelector(".main-content");
      const slideHeight = fixedSlider.current.offsetHeight;
      MainContent.style.marginTop = slideHeight + "px";
    }
  }, []);
  return (
    <header
      className="slider slider-prlx fixed-slider text-center"
      ref={fixedSlider}
      style={{
        height: "80vh",
      }}
    >
      <div className="swiper-container parallax-slider">
        <Swiper {...swiperOptions} className="swiper-wrapper">
          {intro1Data.map((slide) => (
            <SwiperSlide key={slide.id} className="swiper-slide">
              <div
                className="bg-img valign"
                style={{
                  background: "black",
                }}
                data-overlay-dark="6"
              >
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-10 col-md-10">
                      <div
                        className="caption center"
                        style={{
                          width: "100%",
                          // backgroundColor:'red'
                        }}
                      >
                        <h1 className="color-font">{slide.title}</h1>
                        {slide.content && <p>{slide.content}</p>}
                        <div className="sub-title mt-3">
                          <h6 className="p-3">
                            {" "}
                            <a
                              href="#Calendy"
                              onClick={(e) => smoothScroll(e, "Calendy")}
                            >
                              Get Free Consultation
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="setone setwo">
          <div className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer">
            <i className="fas fa-chevron-right"></i>
          </div>
          <div className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer">
            <i className="fas fa-chevron-left"></i>
          </div>
        </div>
        <div className="swiper-pagination top botm"></div>

        <div className="social-icon">
          <a target="blank" href="https://www.facebook.com/gatekod">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            target="blank"
            href="https://www.linkedin.com/company/gatekod/people/"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default SliderHeader;
