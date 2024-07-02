'use client'
import React, { useEffect, useState } from 'react'
import Footer from '@/components/Common/Footer'
import Navbar from '@/components/Common/Navbar'
import ProjectDescription from '@/components/Project/ProjectDescription'
import ProjectDetails2Header from '@/components/Project/ProjectDetails2Header'
import ProjectGallery from '@/components/Project/ProjectGallery'
import ProjectIntroduction from '@/components/Project/ProjectIntroduction'
import Loading from '@/components/Common/Loader';
import ProjectDate from "@/data/project-details2.json";
import { useParams } from 'next/navigation'


function ProjectDetailView() {
    const {id} = useParams();
    // const {project} = props
    console.log("props",id)
    const [project,setProject]=useState(null)
    const [loading,setLoading]=useState(true)
    useEffect(() => {
      if (id) {
        const projectData = ProjectDate.find((project) => project.id === parseInt(id));
        console.log("project data in main",projectData)
        setProject(projectData);
        setLoading(false);
      }
    }, [id]);
  
  return (
    <>
    <Navbar  themeMode="light"/>
    <div className="wrapper">
      <ProjectDetails2Header project={project} />
      <ProjectIntroduction project={project?.intro} />
      <ProjectGallery project={project?.gallery} />
      <ProjectDescription project={project?.description} />
   
      <Footer />
    </div>
    </>
  )
}

export default ProjectDetailView