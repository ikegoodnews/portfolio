import {Layout} from '@/_components';
import React from 'react';

const Home = () => {
   return (
      <Layout title="Home" className="hero__section d-flex align-items-center justify-content-center">
         <div className="welcome text-start">
            <h1 className="name pt-1 text-uppercase">
               I&apos;m <span className="text-nowrap">goodnews ike</span>
            </h1>
            <p className="description">
               Results-driven Software Engineer with 5 years of experience in designing, developing, 
               and optimizing high-performance web applications. Adept at using React.js, Next.js, 
               Typescript, Flutter, and state management libraries, with hands-on expertise in 
               CI/CD automation using Bitbucket Pipelines. Currently contributing to innovative 
               fintech solutions, improving product scalability and security. Passionate about 
               transitioning into Product Management to drive technology-driven business growth.
            </p>
         </div>
      </Layout>
   );
};

export default Home;
