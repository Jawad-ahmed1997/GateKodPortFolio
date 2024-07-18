'use client'
import React, { useEffect, useState } from 'react';
//= Page components
// import Loading from '@/components/Common/Loader';
import Navbar from '@/components/Common/Navbar';
import SliderHeader from '@/components/Headers/SliderHeader';
import AboutUs from '@/components/AboutUs/AboutUs2';
import Services from '@/components/Services/Services1';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials/TestimonialsWithVideo';
import Clients from '@/components/Clients/Clients2';
import Team from '@/components/Team/Team2';
import Blogs from '@/components/Blogs/Blogs4';
import SContactForm from '@/components/Contact/ContactFormS';
import Footer from '@/components/Common/Footer';
import Cursor from '@/components/Common/Cursor';
import CircleBg from '@/components/Demos/CircleBg';
import LoadingScreen from '@/components/Common/Loader';
import ProjectProcess from '@/components/ProjectProcess/process';
import Calendly from '@/components/Calendly/page';
import TestimonialsArch from '@/components/Testimonials/TestimonialsArch';
import ContactHeader from '@/components/Contact/ContactHeader';
import ContactForm from '@/components/Contact/ContactForm';
export default function Home4() {
 
  return (
    <>
      {/* <LoadingScreen /> */}
      <Cursor />
      <CircleBg />
      <Navbar themeMode="light" />
      <SliderHeader />
      <div className="main-content">
      <TestimonialsArch />
        <AboutUs />
        <Services lines />
        <Portfolio grid={2} filterPosition="left"/>
        {/* <ProjectProcess lines/> */}
        {/* <Calendly grid={2}  /> */}
        {/* <Testimonials /> */}
        {/* <Clients theme="light" length={4} /> */}
        <Team />
        <ContactHeader />
        <ContactForm theme="light" />
        {/* <Blogs /> */} 
        {/* <SContactForm /> */}
        <Footer hideBGCOLOR />
      </div>
    </>
  )
}