
import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import Navbar from '@/components/Common/Navbar';
import PagesHeader from '@/components/Headers/PagesHeader';
import AboutIntro from '@/components/AboutUs/AboutIntro';
import Services from '@/components/Services/Services1';
import TestimonialsWithVideo from '@/components/Testimonials/TestimonialsWithVideo';
import SkillsCircle from '@/components/Skills/SkillsCircle';
import Team from '@/components/Team/Team1';
import MinimalArea from '@/components/Others/MinimalArea1';
import Clients from '@/components/Clients/Clients1';
import CallToAction from '@/components/Others/CallToAction';
import Footer from '@/components/Common/Footer';

function AboutLight() {
  return (
    <>
      <Loading />
      <Navbar  themeMode="dark"  />
      <PagesHeader imageLink="/img/slid/about.jpg">Gateway to exceptional software solutions.</PagesHeader>
      <AboutIntro />
      <Services style="4item" />
      <TestimonialsWithVideo />
      <SkillsCircle from="aboutPage" />
      {/* <Team /> */}
      <MinimalArea />
      <Clients theme="light" />
      <CallToAction />
      <Footer />
    </>
  )
}

export default AboutLight