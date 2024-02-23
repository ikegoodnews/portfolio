// import type { NextPage } from 'next';
import React, {memo} from 'react';
// import {PageLayout} from '../src/_components';
import {Layout} from '@/_components';

// eslint-disable-next-line react/display-name
const Services = memo(() => {
   return (
      <Layout className="services position-relative">
         <div className="container p-0">services contents</div>
      </Layout>
   );
});

export default Services;
