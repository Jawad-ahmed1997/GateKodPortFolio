
import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import Navbar from '@/components/Common/Navbar';
import ProjectDetails2Header from '@/components/Project/ProjectDetails2Header';
import ProjectIntroduction from '@/components/Project/ProjectIntroduction';
import ProjectGallery from '@/components/Project/ProjectGallery';
import ProjectDescription from '@/components/Project/ProjectDescription';
import Footer from '@/components/Common/Footer';
//= Static Data



export default function ProjectDetailsPage({ params }) {

  const {id} = params;

console.log("id in main projectDetail ",id)
 

 
  


  return (
    <>

      <Navbar  themeMode="light"/>
      <div className="wrapper">
        <ProjectDetails2Header id={id} />
        <ProjectIntroduction id={id} />
        <ProjectGallery id={id} />
        <ProjectDescription id={id} />
     
        <Footer />
      </div>

      
      
    </>
  )
}
