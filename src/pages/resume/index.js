import {Layout} from '@/_components';
import Title from '@/_components/Title';
import React from 'react';

const Resume = () => {
   return (
      <Layout title="Resume" className="about__section projects__section py-lg-5 py-4">
         <div className="w-100">
            <Title label="my resume" title="resume" />
            <p className="section__description observe mt-3">resume here...</p>
         </div>
         {/* <div className="">
                  <a
                     href="./_assets/pdf/CV_GOODNEWS_OGECHUKWU_IKE.pdf"
                     target="_blank"
                     alt="GOODNEWS OGECHUKWU IKE CV"
                     rel="noopener noreferrer"
                     className="action__button">
                     <i className="fa fa-download" aria-hidden="true"></i> CV.
                  </a>
               </div> */}
      </Layout>
   );
};

export default Resume;
