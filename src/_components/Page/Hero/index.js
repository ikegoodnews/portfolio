import SectionWrapper from '@/_components/SectionWrapper';
import React from 'react';

const Hero = () => {
   return (
      <SectionWrapper sectionId="hero" className="hero__section d-flex align-items-center justify-content-center">
         <div className="welcome d-flex flex-column align-items-center justify-content-center">
            <p className="intro">Hello, I&apos;m</p>
            <h1 className="name pt-1 text-center text-uppercase">goodnews ike</h1>
            <h5 className="occupation text-uppercase py-2">Software Developer</h5>
            <p className="description py-3 text-center">
               My job is to develop inspiring and exceptionally beautiful user experience for you, so that you can attract more clients/partners and
               achieve your goal in time.
            </p>
         </div>
      </SectionWrapper>
   );
};

export default Hero;
