'use client'
import React from 'react';

function ProjectDescription({ project }) {

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
            <div className="htit ">
              <h4 className="extra-text">{project?.Head}</h4>
            </div>
            <div className="text js-scroll__content">
              <p className="extra-text">{project?.content}</p>
            </div>
            <dl className="smp-list mt-30">
              
           {project?.keyFetures?.map((list)=>(
            <>
            <dt className='mt-30'>{list?.title}</dt>
            <li className="extra-text" key={list?.id} >{list?.Description}</li>
            </>
           ))}
              </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectDescription