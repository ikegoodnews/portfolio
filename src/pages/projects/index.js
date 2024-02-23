// import type { NextPage } from 'next';
import React, {memo} from 'react';
// import {PageLayout} from '../src/_components';
import {Layout} from '@/_components';

// eslint-disable-next-line react/display-name
const Projects = memo(() => {
   return (
      <Layout className="projects position-relative">
         <div className="container p-0">projects contents</div>
      </Layout>
   );
});

export default Projects;
