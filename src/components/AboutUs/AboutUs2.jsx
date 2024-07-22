import React from "react";
//= Components
import Split from "@/components/Common/Split";
//= Static Data
import AboutUs2Date from "@/data/sections/about-us2.json";
import featuresData from "@/data/sections/features.json";
import { SquareCheck } from 'lucide-react';
import appData from "@/data/app.json";

const AboutUs2 = ({ style, lines }) => {
  return (
    <div className="about section-padding" id="about">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                WHAT WE STAND FOR
              </h6>
              <h3 className="wow color-font">
                Targeted digital projects with real added value
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 ">
            <p className=" font-weight-font-weight-normal">
              Digitalization is not an end in itself. Big buzzwords like
              digitalization, artificial intelligence or cloud alone are not
              enough to get great companies to their goals better, cheaper or
              more securely.
            </p>
            <p className=" font-weight-bold">
              Together with our customers, we create digital solutions that
              solve real challenges and don’t just sound good.
            </p>
            <div className=" mt-4">
            <img  src={appData.darkLogo} alt="logo" className="w-50 h-50" />
            </div>
          </div>

          {/* <div className="col-lg-5 d-none d-lg-block">
            <div className="img-mons sm-mb30">
              <div className="row">
                <div className="col-md-5 cmd-padding valign">
                  <div className="img1 wow" data-wow-delay=".5s">
                    <img src={AboutUs2Date.image1} alt="image" />
                  </div>
                </div>
                <div className="col-md-7 cmd-padding">
                  <div className="img2 wow" data-wow-delay=".3s">
                    <img src={AboutUs2Date.image2} alt="" />
                  </div>
                  <div className="img3 wow" data-wow-delay=".8s">
                    <img src={AboutUs2Date.image3} alt="" />
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6"></div>
                      <div className="col-md-6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="col-lg-6 offset-lg-1 valign">
            <div className="content">
              <div className="sub-title">
                <h6>{AboutUs2Date.smallTitle}</h6>
              </div>
              <Split>
                <h3
                  className="words chars splitting main-title wow"
                  data-splitting
                >
                  {AboutUs2Date.title.first} <br /> {AboutUs2Date.title.second}
                </h3>
              </Split>
              <Split>
                <p className="words chars splitting wow txt" data-splitting>
                  {AboutUs2Date.content}
                </p>
              </Split>
              <div className="ftbox mt-30">
                <ul>
                  {AboutUs2Date.features.map((feature) => (
                    <li
                      key={feature.id}
                      className={`wow fadeIn ${feature.id == 2 ? "space" : ""}`}
                      data-wow-delay={feature.wowDelay}
                    >
                      <span
                        className={`icon color-font pe-7s-${feature.icon}`}
                      ></span>
                      <h6>
                        {feature.name.first} <br /> {feature.name.second}
                      </h6>
                      <div className="dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div> */}

          <div className=" col-lg-4   ">
            <img
              src="https://netsome.de/wp-content/uploads/2024/02/Group-10.png"
              className="w-100 h-100"
              alt=""
            />
          </div>

          <div className="col-lg-4 lg-px-0 lg-pt-0  px-4 pt-20">
            <div className="flex row align-items-center">
              <SquareCheck />
              <h2 className=" mx-2  " style={{
                fontSize:'28px',
                fontFamily:''
              }}>Slim</h2>
            </div>
            <p>Our projects are goal-oriented and without unnecessary frills that increase complexity and costs</p>
            <div className="flex row align-items-center">
              <SquareCheck />
              <h2 className=" mx-2" style={{
                fontSize:'28px'
              }}
              >transparent</h2>
            </div>
            <p>In close communication with our customers, they always retain full insight and control over the project.</p><div className="flex row align-items-center">
              <SquareCheck />
              <h2 className=" mx-2"
              style={{
                fontSize:'28px'
              }}
              >innovative</h2>
            </div>
            <p>We work technically at the cutting edge and make targeted use of industry standards and current innovations.</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AboutUs2;
