'use client';
import React, { useEffect } from 'react';
//= Scripts
import thumparallaxDown from '@/common/thumparallaxDown';


function MinimalArea1() {
  useEffect(() => {
    thumparallaxDown()
  }, [])

  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img className="thumparallax-down" src="/img/min-area.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content pt-0">
              <h4 className="wow color-font">About us.</h4>
              <p className="wow txt" data-splitting>
              We are a top-ranked software development company on Clutch, cultivating smart solutions for a diverse range of clients.
              </p>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6><span>1</span> Our Mission</h6>
                  <p>
                  empower businesses through integrated design, AI-driven development, and strategic marketing. From innovative design to AI-powered development and impactful marketing, we transform ideas into solutions that enhance user experiences and drive growth.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6><span>2</span> Our Goals</h6>
                  <p>
                  Our goal is to seamlessly integrate design, AI-driven development, and strategic marketing to deliver impactful products that enhance user experiences and drive business growth.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6><span>3</span> Why Us?</h6>
                  <p>
                  Clients prefer us for our ability to fuse cutting-edge design, AI-driven development, and strategic marketing into cohesive solutions that not only meet but exceed their expectations. We are dedicated to delivering transformative outcomes that elevate user experiences and drive sustainable business success.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MinimalArea1