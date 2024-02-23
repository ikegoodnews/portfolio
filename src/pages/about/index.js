// import type { NextPage } from 'next';
import {Layout} from '@/_components';
import React, {memo} from 'react';
// import {PageLayout} from '../src/_components';

// eslint-disable-next-line react/display-name
const About = memo(() => {
   return (
      <Layout className="about position-relative">
         <div className="container p-0">about contents</div>
      </Layout>
   );
});

export default About;
