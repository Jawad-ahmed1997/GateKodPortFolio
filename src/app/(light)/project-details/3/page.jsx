'use client'
import React, { useEffect, useState } from 'react';
import ProjectDetailView from '@/section/project-detailView';
import ProjectDate from "@/data/project-details2.json";
export default function ProjectDetailsPage3() {
    const [project,setProject]=useState(null)
    const [loading,setLoading]=useState(true)
    useEffect(() => {
      
        const projectData = ProjectDate.find((project) => project.id === 3);
        setProject(projectData);
        setLoading(false);
  
    }, []);
  return (
    <>
      <ProjectDetailView project={project} />
    </>
  )
}