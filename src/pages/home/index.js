// import Layout from '@/_components/Layout';
import {Layout} from '@/_components';
import React from 'react';

const Home = () => {
   return (
      <Layout title="Home" className="hero__section d-flex align-items-center justify-content-center">
         <div className="welcome text-start">
            <h1 className="name pt-1 text-uppercase">I&apos;m goodnews ike</h1>
            <p className="description py-3">
               Highly proficient software developer with over 3 years of professional experience in developing robust and scalable web applications.
               My expertise lies in full-stack development with a keen focus on front-end technologies and user experience. I am committed to
               continuous learning and applying new technologies to solve complex problems.
            </p>
         </div>
      </Layout>
   );
};

export default Home;
