import {footerLabel, footerLink, getLocationName, useRoutesCode} from '@/_utils';
import {Footer, Navbar} from '@/_navigation';
import React, {memo, useEffect} from 'react';
import SkipToContent from '../SkipToContent';
import {useRouter} from 'next/router';
import classNames from 'classnames';
import Head from 'next/head';

// eslint-disable-next-line react/display-name
const Layout = memo(({children, title, className, ...rest}) => {
   const router = useRouter();
   const code = useRoutesCode();

   useEffect(() => {
      const cursorChange = document.querySelector('.mouse__handle');
      document.addEventListener('mousemove', (e) => {
         // console.log('e', e);
         cursorChange.setAttribute('style', `top: ${e.pageY}px; left: ${e.pageX}px;`);
      });

      document.addEventListener('onclick', (e) => {
         cursorChange.classList.add('expand');
         setTimeout(() => {
            cursorChange.classList.remove('expand');
         }, 500);
      });
   }, []);

   // useEffect(() => {
   //    const controlNavbar = () => {
   //       const currentScrollPos = window.scrollY;
   //       if ((lastScrollY > currentScrollPos && lastScrollY - currentScrollPos > 70) || currentScrollPos < 10) {
   //          setShow(true);
   //       } else {
   //          setShow(false);
   //       }
   //       setLastScrollY(currentScrollPos);
   //    };

   //    document.addEventListener('scroll', controlNavbar);

   //    return () => document.removeEventListener('scroll', controlNavbar);
   // }, [lastScrollY]);

   return (
      <main className={`main__wrapper`}>
         <Head>
            <title>{`${title} | Goodnews Ogechukwu Ike`}</title>
            {/* <meta name="msapplication-TileColor" content={`${theme ? '#000000' : '#FFFFFF'}`} />
            <meta name="theme-color" content={`${theme ? '#000000' : '#FFFFFF'}`} /> */}
            <link rel="shortcut icon" href="/favicon.ico" />
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:url" content="https://https://goodnews-ike.vercel.app" />
            <meta property="og:title" content="Goodnews Ike Portfolio Website" />
            <meta
               property="og:description"
               content="Goodnews Ike - Results-driven Software Engineer with 5 years of experience in designing, developing, and optimizing high-performance web applications. Adept at using React.js, Next.js, Typescript, Flutter, and state management libraries, with hands-on expertise in CI/CD automation using Bitbucket Pipelines. Currently contributing to innovative fintech solutions, improving product scalability and security. Passionate about transitioning into Product Management to drive technology-driven business growth." />
            <meta name="author" content="Goodnews Ogechukwu Ike" />
            <meta name="keywords" content="Goodnews Ogechukwu Ike, software engineer, software developer, frontend engineer, frontend, engineer, developer" />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="en-US" />
            <meta property="og:type" content="website" />
            <meta name="description" content="Hi, I&#x27;m Goodnews Ogechukwu Ike, Software Engineer." />
            <meta property="og:description" content="Hi, I&#x27;m Goodnews Ogechukwu Ike, Software Engineer." />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="twitter:site" content="@goodnews_ike" />
            <meta name="instagram:site" content="@ikegoodnewsofficial" />
            <meta name="linkedin:site" content="@ikegoodnews" />
            <meta name="github:site" content="@ikegoodnews" />
            <meta name="facebook:site" content="@goodnewsikeogeh" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <meta name="robots" content="index, nofollow" />
            <link rel="manifest" href="/manifest.json" />
            <meta property="og:title" content="Goodnews Ogechukwu Ike" />
            <meta property="og:url" content="https://goodnews-ike.vercel.app" />
            <meta name="apple-mobile-web-app-title" content="Goodnews Ogechukwu Ike" />
            <link
               rel="stylesheet"
               href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
               integrity="sha512-SfTiTlX6kk+qitfevl/7LibUOeJWlt9rbyDn92a1DqWOw9vWG2MFoays0sgObmWazO5BQPiFucnnEAjpAB+/Sw=="
               crossOrigin
               referrerPolicy="no-referrer"
            />
         </Head>

         <div className="PageLayout container-fluid p-0">
            {/* <div className="PageLayout__Backdrop" /> */}
            <div className="mouse__handle" />
            <div className="PageLayout__Contents">
               <SkipToContent content="main-content" />
               <Navbar />
               <div className="container">
                  <div className="row m-0 align-items-center justify-content-center">
                     <div className="col-md-10 px-0">
                        <section id="main-content" className={classNames('section__wrapper', className)}>
                           {children}
                        </section>
                        <Footer label={footerLabel(code)} link={footerLink(code)} />
                     </div>
                  </div>
               </div>
               <div className={classNames('pageName', {somePages: router.pathname === '/resume' || router.pathname === '/projects'})}>
                  <h1 className="">{getLocationName(router.pathname)}.</h1>
               </div>
            </div>
         </div>
      </main>
   );
});

export default Layout;
