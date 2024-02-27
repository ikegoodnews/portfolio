import SectionWrapper from '@/_components/SectionWrapper';
import Title from '@/_components/Title';
import React from 'react';

const Projects = () => {
   return (
      <SectionWrapper sectionId="projects" className="about__section projects__section py-lg-5 py-4">
         <div className="">
            <Title label="my work" title="projects" />
            <p className="section__description observe mt-3">
               The following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with
               links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies,
               and manage projects effectively.
            </p>

            <div className="row mt-md-5 mt-4">
               {/* {aboutCards?.map((card, i) => (
                  <div key={i} className="col-lg-3 col-md-4 col-sm-6 mb-4 px-3">
                     <div className="overview__card observe h-100 py-4 px-lg-5 px-4">
                        <i className={classNames(`icon-wrapper ${card.icon}`, numToString(i + 1, true))} aria-hidden="true"></i>
                        <h5 className="overview__card--title mt-4 mb-3">{card.label}</h5>
                     </div>
                  </div>
               ))} */}
            </div>
         </div>
      </SectionWrapper>
   );
};

export default Projects;
