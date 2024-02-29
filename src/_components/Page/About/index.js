import SectionWrapper from '@/_components/SectionWrapper';
import Title from '@/_components/Title';
import {aboutCards, techStacks} from '@/_constants';
import {numToString} from '@/_helpers';
import classNames from 'classnames';
import React, {useEffect} from 'react';

const About = () => {
   useEffect(() => {
      const cards = document.querySelectorAll('.about__section .observe');

      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               entry.target.classList.toggle('show', entry.isIntersecting);
               // if (entry.isIntersecting) observer.unobserve(entry.target);
            });
         },
         {
            rootMargin: '0px',
         },
      );

      if (cards) {
         cards.forEach((card) => {
            observer.observe(card);
         });
      }
   }, []);

   return (
      <SectionWrapper sectionId="about" className="about__section py-lg-5 py-4">
         <div className="w-100">
            <Title label="introduction" title="overview" />
            <p className="section__description observe mt-3">
               I&apos;m a skilled software developer with experience in Dart and JavaScript, and expertise in frameworks like Next.js, React.js,
               Node.js, and Flutter. I&apos;m a fast pace learner and collaborate closely with clients to create efficient, scalable, and
               user-friendly solutions that solve real-world problems. Let&apos;s work together to bring your ideas to life!
            </p>

            <div className="row mt-md-5 mt-4">
               {aboutCards?.map((card, i) => (
                  <div key={i} className="col-lg-3 col-md-4 col-sm-6 mb-4 px-3">
                     <div className="overview__card observe h-100 py-4 px-lg-5 px-4">
                        <i className={classNames(`icon__wrapper ${card.icon}`, numToString(i + 1, true))} aria-hidden="true"></i>
                        <h5 className="overview__card--title mt-4 mb-3">{card.label}</h5>
                     </div>
                  </div>
               ))}
            </div>

            <div className="techs__used mt-5 overflow-hidden">
               <div className="d-flex align-items-center mb-4">
                  {techStacks?.map((stack, i) => (
                     <div key={i} className="stack me-4">
                        {stack}
                     </div>
                  ))}
               </div>
               <div className="d-flex align-items-center">
                  {techStacks?.map((stack, i) => (
                     <div key={i} className="stack me-4">
                        {stack}
                     </div>
                  ))}
               </div>
               <div className="nav__container__2">
                  <button className="prev"></button>
                  <button className="next"></button>
               </div>
            </div>
         </div>
      </SectionWrapper>
   );
};

export default About;
