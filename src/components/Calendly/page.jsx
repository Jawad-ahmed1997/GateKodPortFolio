"use client";
import React, { useEffect } from "react";
import Link from "next/link";
//= Scripts
import initIsotope from "@/common/initIsotope";
import portFolio from "@/data/portfolio.json";
import { InlineWidget } from "react-calendly";
function Calendly({ grid }) {
  useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 500);
  }, []);
  return (
    <section className="portfolio section-padding pb-70" id="" >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              {/* <h6 className="wow fadeIn" data-wow-delay=".5s">Portfolio</h6> */}
              <h3 className="wow color-font">
                Arrange a free initial consultation now
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className={`${grid == 3 ? "container-fluid" : "container"}`}>
        <div className="row">
          {/* <div  className="gallery full-width"> */}
          {/* {portFolio.map((item,ind)=>(
              <div key={ind} className={`${grid == 3
              ? 'col-lg-4 col-md-6'
              : grid == 2
                ? `col-md-6 ${ind === 1 ? 'lg-mr' : ''}`
                : 'col-12'
              } items graphic wow fadeInUp `} data-wow-delay=".4s">
              <div className="item-img">
                <Link className="imago wow " href={`/project-details/${item?.id}`}>
                  <img src={item?.image} alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>{item?.title}</h6>
                <span>
                  <Link href="#0">Design</Link>,
                  <Link href="#0">WordPress</Link>
                </span>
              </div>
            </div>
            ))} */}
          <div
            className={`${
              grid == 3
                ? "col-lg-4 col-md-6"
                : grid == 2
                ? `col-md-6 `
                : "col-12"
            } items graphic wow fadeInUp `}
          >
            <img src="/img/team/1.jpg" alt=""className="w-75 h-75"  />
          </div>
          <div
            className={`${
              grid == 3
                ? "col-lg-4 col-md-6"
                : grid == 2
                ? `col-md-6 `
                : "col-12"
            } items graphic wow fadeInUp `}
          >
            <InlineWidget s url="https://calendly.com/jawad-walbi" />
          </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}

export default Calendly;
