'use client'
import React, { useEffect, useState } from 'react';
import ProjectDate from "@/data/project-details2.json";

function ProjectDescription({ id }) {
  console.log("id in ProjectDescription ",id)
  const [project,setProject]=useState(null)
  const [loading,setLoading]=useState(true)
  useEffect(() => {
    if (id) {
      const projectData = ProjectDate.find((project) => project.id === parseInt(id));
      setProject(projectData?.description);
      setLoading(false);
    }
  }, [id]);
  return (
    <section className="intro-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit">
              <h4><span>02 </span> Description</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text js-scroll__content">
              <p className="extra-text">{project?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectDescription