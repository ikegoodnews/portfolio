import {ProjectsContext} from '@/_utils/context';
import React, {useContext} from 'react';
import Title from '@/_components/Title';
import {techStacks} from '@/_constants';
import {Layout} from '@/_components';
import {format} from 'date-fns';
import Image from 'next/image';

const Projects = () => {
   const projectsData = useContext(ProjectsContext);

   return (
      <Layout title="Projects" className="about__section projects__section py-lg-5 py-4">
         <div className="w-100">
            <Title label="my work" title="projects" />
            {/* <p className="section__description observe mt-3">
               The following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with
               links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies,
               and manage projects effectively.
            </p> */}

            <div className="row mt-5">
               {projectsData?.slice(0, 4)?.map((project, i) => (
                  <div key={i} className="col-lg-6 mb-4">
                     <div className="position-relative">
                        {/* <div className="bg__layer"></div> */}
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

                           <div className="details p-sm-4 p-2">
                              <h5
                                 title={project?.title}
                                 data-toggle="tooltip"
                                 data-placement="top"
                                 className="project__title pb-0 text-truncate">
                                 {project?.title}
                              </h5>
                              <p title={project?.description} data-toggle="tooltip" data-placement="top" className="project__description pb-3 pt-2 text-truncate">
                                 {project?.description}
                              </p>
                              <div className="techs__used overflow-hidden">
                                 <div className="d-flex align-items-center">
                                    {techStacks?.map((stack, i) => (
                                       <div key={i} className="stack me-2">
                                          {stack}
                                       </div>
                                    ))}
                                 </div>
                              </div>
                              {/* <div className="links pt-xl-3 pt-1 d-flex align-items-center justify-content-between">
                                 <button className="click">
                                    <i className="fa fa-github me-2" aria-hidden="true"></i>
                                    source code.
                                 </button>
                                 <button className="click">
                                    <i className="fa fa-external-link me-2" aria-hidden="true"></i>
                                    view demo.
                                 </button>
                              </div> */}
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
