import Title from '@/_components/Title';
import {aboutCards} from '@/_constants';
import {numToString} from '@/_helpers';
import classNames from 'classnames';
import React from 'react';

const About = () => {
   return (
      <section id="about" className="section__wrapper about__section">
         <div className="">
            <Title label="introduction" title="overview" />
            <p className="section__description mt-3">
               I&apos;m a skilled software developer with experience in Dart and JavaScript, and expertise in frameworks like Next.js, React.js,
               Node.js, and Flutter. I&apos;m a fast pace learner and collaborate closely with clients to create efficient, scalable, and
               user-friendly solutions that solve real-world problems. Let&apos;s work together to bring your ideas to life!
            </p>

            <div className="row mt-md-5 mt-4">
               {aboutCards?.map((card, i) => (
                  <div key={i} className="col-lg-3 col-md-4 col-sm-6 mb-4 px-3">
                     <div className="overview__card h-100 py-4 px-lg-5 px-4">
                        <i className={classNames(`icon-wrapper ${card.icon}`, numToString(i + 1, true))} aria-hidden="true"></i>
                        <h5 className="overview__card--title mt-4 mb-3">{card.label}</h5>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default About;
