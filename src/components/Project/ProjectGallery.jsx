'use client'
import React, { useEffect, useState } from 'react';
import ProjectDate from "@/data/project-details2.json";

function ProjectGallery({ id }) {
  const [project,setProject]=useState(null)
  const [loading,setLoading]=useState(true)
  useEffect(() => {
    if (id) {
      const projectData = ProjectDate.find((project) => project.id === parseInt(id));
      setProject(projectData?.gallery);
      setLoading(false);
    }
  }, [id]);
  return (
    <section className="projdtal">
      <div className="popup-img">
        <div className="row" style={{
  display: "flex",
  justifyContent: "center",
  
}}>
          {
            project?.map((imageLink, index) => (
              <a style={{boxShadow: "11px 19px 8px -11px rgba(0,0,0,0.1),0px 0px 15px -3px rgba(0,0,0,0.1)",borderRadius:10,margin:10}} href="#0" key={index} className={`col-md-${index + 1 === project.length ? '8' : '4'} popimg`}>
                <img alt="" src={imageLink}  />
              </a>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default ProjectGallery