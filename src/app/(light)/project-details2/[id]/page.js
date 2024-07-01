'use client'
import React, { useEffect, useState } from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import Navbar from '@/components/Common/Navbar';
import ProjectDetails2Header from '@/components/Project/ProjectDetails2Header';
import ProjectIntroduction from '@/components/Project/ProjectIntroduction';
import ProjectGallery from '@/components/Project/ProjectGallery';
import ProjectDescription from '@/components/Project/ProjectDescription';
import ProjectVideo from '@/components/Project/ProjectVideo';
import NextProject from '@/components/Project/NextProject';
import Footer from '@/components/Common/Footer';
import { usePathname, useRouter  } from 'next/navigation'
//= Static Data
import ProjectDate from "@/data/project-details2.json";


export default function ProjectDetailsPage({ params }) {
  const [project,setProject]=useState(null)
  const [loading,setLoading]=useState(true)
  const {id} = params;


  useEffect(() => {
    if (id) {
      const projectData = ProjectDate.find((project) => project.id === parseInt(id));
      setProject(projectData);
      setLoading(false);
    }
  }, [id]);

 
  

  const [theme,setTheme]=useState("light")
  return (
    <>
    {loading?(<Loading />):(<>
      <Navbar setTheme={setTheme} theme={theme}/>
      <div className="wrapper">
        <ProjectDetails2Header projectHeaderData={project} />
        <ProjectIntroduction projectIntroductionData={project?.intro} />
        <ProjectGallery projectGalleryData={project?.gallery} />
        <ProjectDescription projectDescriptionData={project?.description} />
        {/* <ProjectVideo projectVideoData={ProjectDate} /> */}
        {/* <NextProject /> */}
        <Footer />
      </div>
    </>)}
      
      
    </>
  )
}
