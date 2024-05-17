import {footerLabel, footerLink, getLocationName, useRoutesCode} from '@/_utils';
import {Footer, Navbar} from '@/_navigation';
import classNames from 'classnames';
import React, {memo, useContext, useEffect} from 'react';
import SkipToContent from '../SkipToContent';
import Head from 'next/head';
import {useRouter} from 'next/router';
import AppContext from '@/_utils/context';

// eslint-disable-next-line react/display-name
const Layout = memo(({children, title, className}) => {
   const router = useRouter();
   const code = useRoutesCode();
   // const [show, setShow] = useState(true);
   // const [lastScrollY, setLastScrollY] = useState(0);
   const {theme, loadTheme, show, setTheme} = useContext(AppContext);

   useEffect(() => {
      // logPage();
      loadTheme();
   }, [loadTheme]);

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
   //    console.log(`current ScrollPos=====>`);
   //    const controlNavbar = () => {
   //       const currentScrollPos = window.scrollY;
   //       console.log(`current ScrollPos=====>`, currentScrollPos);

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
      <main className="main__wrapper">
         <Head>
            <title>{`${title} | Goodnews Ogechukwu Ike | goo.dev`}</title>
            <meta name="msapplication-TileColor" content={`${theme ? '#000000' : '#FFFFFF'}`} />
            <meta name="theme-color" content={`${theme ? '#000000' : '#FFFFFF'}`} />
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
               <div className={classNames('pageName', {somePages: router.asPath === '/resume' || router.asPath === '/projects'})}>
                  <h1 className="">{getLocationName(router.asPath)}.</h1>
               </div>
            </div>
         </div>
      </main>
   );
});

export default Layout;
