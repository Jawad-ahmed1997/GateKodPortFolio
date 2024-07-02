'use client'
import React, { useEffect, useState } from 'react';
import ProjectDate from "@/data/project-details2.json";


function ProjectDetails2Header({id}) {
  const [project,setProject]=useState(null)
  const [loading,setLoading]=useState(true)
  useEffect(() => {
    if (id) {
      const projectData = ProjectDate.find((project) => project.id === parseInt(id));
      setProject(projectData);
      setLoading(false);
    }
  }, [id]);
  return (
    <section className="page-header proj-det bg-img parallaxie valign"
      style={{ backgroundImage: `url(${project?.projectHeaderImage})`}} data-overlay-dark="4">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-9">
            <div className="cont">
              {/* <h6>{project?.title.small}</h6> */}
              <h2>{project?.title.big}</h2>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Client</h6>
              <p>
                <Link href={project?.clientURLLink}>
                  {project?.clientURLName}
                </Link>
              </p>
            </div>
          </div>
     
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Categories</h6>
              <p>
                {
                  project?.categories.map((cat, index) => (
                    <Link href={cat?.link} key={cat.id}>
                      {cat?.name}
                      {project?.categories?.length != index + 1 ? " ," : ""}
                    </Link>
                  ))
                }
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Tags</h6>
              <p>
                {
                  project?.tags.map((tag, index) => (
                    <Link href={tag?.link} key={tag.id}>
                      {tag?.name}
                      {project?.tags?.length != index + 1 ? " ," : ""}
                    </Link>
                  ))
                }
              </p>
            </div>
          </div>
        </div> */}
      </div >
    </section >
  )
}

export default ProjectDetails2Header