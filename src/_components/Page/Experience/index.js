import SectionWrapper from '@/_components/SectionWrapper';
import Title from '@/_components/Title';
import {experiences} from '@/_constants';
import Link from 'next/link';
import React from 'react';

const Experience = () => {
   return (
      <SectionWrapper sectionId="experience" className="experience__section py-lg-5 py-4">
         <div className="w-100">
            <Title tClassName="text-center" label="what i have done so far" title="experience" />

            <div className="row">
               <div className="col-md-10 mx-auto">
                  <div className="row mt-lg-5 mt-4">
                     {experiences?.map((experience, i) => (
                        <>
                           <div key={i} className="col-md-4">
                              <div className="job__details text-md-end">
                                 <div className="duration text-uppercase">{experience?.duration}</div>
                                 <Link href="" className="external__link pt-1 pb-2 d-flex align-items-center justify-content-md-end">
                                    <i class="fa fa-external-link me-2" aria-hidden="true"></i>
                                    <span className="company__site text-uppercase">visit site</span>
                                 </Link>
                                 <p className="company__description">{experience?.companyDescription}</p>
                              </div>
                           </div>
                           <div key={i} className="col-md-8 ps-5 mb-5">
                              <div className="job__description">
                                 <h5 className="occupation">{experience?.occupation}</h5>
                                 <p className="company pt-2 pb-3">{experience?.companyName}</p>
                                 {experience?.responsibilities && (
                                    <ul className="ps-5">
                                       {experience?.responsibilities?.map((responsibility, i) => (
                                          <li key={i} className="mb-2">
                                             {responsibility}
                                          </li>
                                       ))}
                                    </ul>
                                 )}
                              </div>
                           </div>
                        </>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </SectionWrapper>
   );
};

export default Experience;
