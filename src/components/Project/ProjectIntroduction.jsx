'use client'
import React, { useEffect, useState } from 'react';
import ProjectDate from "@/data/project-details2.json";

function ProjectIntroduction({project}) {

  return (
    <section className="intro-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit">
              <h4><span>01 </span> Introduction</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text js-scroll__content">
              <p className="extra-text">
                {project?.content}
              </p>
              <ul className="smp-list mt-30">
           {project?.spmList?.map((list)=>(
            <li key={list?.id} >{list.name}</li>
           ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectIntroduction