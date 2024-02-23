// import type { NextPage } from 'next';
import React, {memo} from 'react';
// import {PageLayout} from '../src/_components';
import {Layout} from '@/_components';

// eslint-disable-next-line react/display-name
const Contact = memo(() => {
   return (
      <Layout className="contact position-relative">
         <div className="container p-0">contact contents</div>
      </Layout>
   );
});

export default Contact;
