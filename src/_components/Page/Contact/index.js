import SectionWrapper from '@/_components/SectionWrapper';
import Title from '@/_components/Title';
import React from 'react';

const Contact = () => {
   return (
      <SectionWrapper sectionId="contact" className="contact__section py-lg-5 py-4">
         <div className="">
            <Title tClassName="text-center" label="get in touch" title="contact" />
         </div>
      </SectionWrapper>
   );
};

export default Contact;
