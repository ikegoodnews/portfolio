import SectionWrapper from '@/_components/SectionWrapper';
import Title from '@/_components/Title';
import React from 'react';

const Experience = () => {
   return (
      <SectionWrapper sectionId="experience" className="experience__section py-lg-5 py-4">
         <div className="w-100">
            <Title tClassName="text-center" label="what i have done so far" title="experience" />

            <div className="row mt-lg-5 mt-4">contents</div>
         </div>
      </SectionWrapper>
   );
};

export default Experience;
