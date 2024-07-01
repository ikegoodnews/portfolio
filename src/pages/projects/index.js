import {PROJECTS} from '@/_components/AppData';
import {Layout, Title} from '@/_components';
import Image from 'next/image';
import React from 'react';

const Projects = () => {
   return (
      <Layout title="Projects" className="about__section projects__section py-lg-5 py-4">
         <div className="w-100">
            <Title label="my work" title="projects" />
            <div className="row mt-5 gx-5">
               {PROJECTS?.map((project, i) => (
                  <div key={i} className="col-lg-6 mb-md-5 mb-4 position-relative">
                     <div className="projectCard h-100">
                        <div className="img_wrapper">
                           {/* <iframe src="https://app.waystream.io" frameborder="0" className="h-100 w-100"></iframe> */}
                           <Image
                              src={project?.img}
                              className="d-block w-100"
                              alt={`${project?.title}-artwork`}
                              // quality={100}
                              unoptimized
                              height={100}
                              width={100}
                              priority
                           />
                        </div>

                        <div className="details p-sm-4 p-2">
                           <h5 title={project?.title} data-toggle="tooltip" data-placement="top" className="project__title pb-0 text-truncate">
                              {project?.title}
                           </h5>
                           <p
                              title={project?.description}
                              data-toggle="tooltip"
                              data-placement="top"
                              className="project__description pb-3 pt-2 text-truncate">
                              {project?.description}
                           </p>
                           <div className="techs__used overflow-hidden">
                              <div className="d-flex align-items-center">
                                 {project?.techStacks?.slice(0, 5)?.map((stack, i) => (
                                    <div key={i} className="stack me-2">
                                       {stack}
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </Layout>
   );
};

export default Projects;
