import React from 'react';

function ProjectIntroduction({ projectIntroductionData }) {
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
                {projectIntroductionData.content}
              </p>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectIntroduction