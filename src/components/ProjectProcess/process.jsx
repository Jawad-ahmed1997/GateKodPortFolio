import React from "react";
//= Components
import Split from "@/components/Common/Split";
//= Static Data
import AboutUs2Date from "@/data/sections/process.json";

const ProjectProcess = ({style,lines}) => {
  return (
    <>
    <div className="process section-padding">
      <div className="container">
        <div className="row">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
              PROJECT PROCESS
              </h6>
              <h3 className="wow color-font">
              This is how we make your project a success.
              </h3>
             
            </div>
          </div>
        </div>
        <div className="col-lg-6 offset-lg-1 valign">
            <div className="content">
              {/* <div className="sub-title">
                <h6>{AboutUs2Date.smallTitle}</h6>
              </div> */}
              {/* <Split>
                <h3
                  className="words chars splitting main-title wow"
                  data-splitting
                >
                  {AboutUs2Date.title.first} <br /> {AboutUs2Date.title.second}
                </h3>
              </Split> */}
             
              <div className="ftbox ">
                <ul className="">
                  {AboutUs2Date.features.map((feature) => (
                    <li
                      key={feature.id}
                      className={`wow fadeIn `}
                      data-wow-delay={feature.wowDelay}
                    >
                      <span
                        className={`icon color-font pe-7s-${feature.icon}`}

                      ></span>
                      <div style={{display:"flex",flexDirection:'column',justifyContent:"start" ,alignItems:"start"}}>

                      <h5 style={{textAlign:"left"}}>
                        {feature.name.first}
                      </h5>
                      <p>
                        {feature.description} 
                      </p>
                      </div>
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
          </div>
          <div className="col-lg-5">
            <div className="img-mons sm-mb30 " style={{display:"flex",alignItems:"center",height:"100%",justifyContent:"center"}}>
              <div className="row"  >
                <div className="col-md-5 cmd-padding valign">
                  <div className="img1 wow imago" data-wow-delay=".5s">
                    <img src={AboutUs2Date.image1} alt="" />
                  </div>
                </div>
                <div className="col-md-7 cmd-padding">
                  <div className="img2 wow imago" data-wow-delay=".3s">
                    <img src={AboutUs2Date.image2} alt="" />
                  </div>
                  <div className="img3 wow imago" data-wow-delay=".8s">
                    <img src={AboutUs2Date.image3} alt="" />
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">

                      </div>
                      <div className="col-md-6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
    

  
    </>
  );
};

export default ProjectProcess;
