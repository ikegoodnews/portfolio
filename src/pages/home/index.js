import {Hexagon, Layout} from '@/_components';
import {Navbar} from '@/_navigation';
import Head from 'next/head';
import {useRouter} from 'next/router';
import React, {memo} from 'react';

// eslint-disable-next-line react/display-name
const Home = memo(() => {
   const router = useRouter();

   return (
      <Layout className="home position-relative">
         <div className="hero__section d-flex align-items-center justify-content-center">
            <div className="welcome d-flex flex-column align-items-center justify-content-center">
               <p className="intro">Hello, I&apos;m</p>
               <h1 className="name pt-1 text-uppercase">goodnews ike</h1>
               <h5 className="occupation text-uppercase py-2">Software Developer</h5>
               <p className="description py-3 text-center">
                  My job is to develop inspiring and exceptionally beautiful user experience for you, so that you can attract more clients/partners
                  and achieve your goal in time.
               </p>
            </div>
         </div>
      </Layout>
   );
});

export default Home;
