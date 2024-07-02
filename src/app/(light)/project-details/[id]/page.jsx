'use client'
import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import Navbar from '@/components/Common/Navbar';
import ProjectDetails2Header from '@/components/Project/ProjectDetails2Header';
import ProjectIntroduction from '@/components/Project/ProjectIntroduction';
import ProjectGallery from '@/components/Project/ProjectGallery';
import ProjectDescription from '@/components/Project/ProjectDescription';
import Footer from '@/components/Common/Footer';
import { useRouter } from 'next/navigation';
//= Static Data



export default function ProjectDetailsPage() {

  const router = useRouter();
  const { id } = router.query; 



console.log("id in main projectDetail ",id)
if (!id) {
  return <div>Loading...</div>;
}

 
  


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
