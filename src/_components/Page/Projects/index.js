import SectionWrapper from '@/_components/SectionWrapper';
import Title from '@/_components/Title';
import {projects, techStacks} from '@/_constants';
import {format} from 'date-fns';
import Image from 'next/image';
import React from 'react';

const Projects = () => {
   return (
      <SectionWrapper sectionId="projects" className="about__section projects__section py-lg-5 py-4">
         <div className="w-100">
            <Title label="my work" title="projects" />
            <p className="section__description observe mt-3">
               The following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with
               links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies,
               and manage projects effectively.
            </p>

            <div className="row mt-md-5 mt-4">
               {projects?.slice(0, 4)?.map((project, i) => (
                  <div key={i} className="col-lg-6 p-md-4 px-2 mb-lg-4 mb-5">
                     <div className="position-relative">
                        <div className="bg__layer"></div>
                        <div className="projectCard h-100">
                           <div className="img_wrapper">
                              <Image
                                 src={project?.img}
                                 className="d-block w-100"
                                 alt={`${project?.title}-artwork`}
                                 quality={100}
                                 height={100}
                                 width={100}
                                 priority
                              />
                           </div>
                           <div className="details px-sm-4 px-2 py-sm-3 py-2">
                              <div className="date px-2 py-1">{format(new Date(project?.date), 'EE, dd MMM, yyyy')}</div>
                              <h5
                                 title={project?.title}
                                 data-toggle="tooltip"
                                 data-placement="top"
                                 className="project__title pb-sm-3 pb-2 text-truncate">
                                 {project?.title}
                              </h5>
                              <p title={project?.description} data-toggle="tooltip" data-placement="top" className="project__description">
                                 {project?.description}
                              </p>
                              <div className="techs__used overflow-hidden mb-2 mt-sm-4 mt-3">
                                 <div className="d-flex align-items-center">
                                    {techStacks?.map((stack, i) => (
                                       <div key={i} className="stack me-2">
                                          {stack}
                                       </div>
                                    ))}
                                 </div>
                                 <div className="nav__container__2">
                                    <button className="prev"></button>
                                    <button className="next"></button>
                                 </div>
                              </div>
                              <div className="links pt-3 d-flex align-items-center justify-content-between">
                                 <button className="click">
                                    <i class="fa fa-github me-2" aria-hidden="true"></i>
                                    source code.
                                 </button>
                                 <button className="click">
                                    <i class="fa fa-external-link me-2" aria-hidden="true"></i>
                                    view demo.
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </SectionWrapper>
   );
};

export default Projects;
