import SectionWrapper from '@/_components/SectionWrapper';
import Title from '@/_components/Title';
import {projects} from '@/_constants';
import {format} from 'date-fns';
import Image from 'next/image';
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
               {projects?.slice(0, 4)?.map((project, i) => (
                  <div key={i} className="col-lg-6 p-md-4 px-2 mb-md-0 mb-4">
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
                        <div className="details p-4">
                           <div className="date">{format(new Date(project?.date), 'EE, dd MMM yyyy')}</div>
                           <div className="links">
                              <button className="">
                                 <i class="fa fa-github" aria-hidden="true"></i>
                                 source code.
                              </button>
                              <button className="">
                                 <i class="fa fa-external-link" aria-hidden="true"></i>
                                 view live
                              </button>
                           </div>
                           <h5 className="project__title">{project?.title}</h5>
                           <p className="project__description">{project?.description}</p>
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
