import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/index.scss';
import '@/styles/globals.scss';
import {useEffect, useState} from 'react';
import {PageTransition} from 'next-page-transitions';
// import {ToastContainer} from 'react-toastify';

if (process.env.NODE_ENV !== 'development') {
   console.log = () => {};
}

export default function App({Component, pageProps}) {
   useEffect(() => {
      // typeof document !== undefined &&
      require('bootstrap/dist/js/bootstrap.js');
   }, []);

   // useEffect(() => {
   //    const cards = document.querySelectorAll('.observe');

   //    const observer = new IntersectionObserver(
   //       (entries) => {
   //          entries.forEach((entry) => {
   //             entry.target.classList.toggle('show', entry.isIntersecting);
   //             // if (entry.isIntersecting) observer.unobserve(entry.target);
   //          });
   //       },
   //       {
   //          rootMargin: '0px',
   //       },
   //    );

   //    if (cards) {
   //       cards.forEach((card) => {
   //          observer.observe(card);
   //       });
   //    }
   // }, []);

   return (
      <>
         <PageTransition timeout={200} classNames="page-transition" loadingDelay={100}>
            {/* <AppContext.Provider
               key={Math.floor(Math.random() * Math.floor(20))}
               value={{
                  show: show,
                  theme: theme,
                  loadTheme: loadTheme,
                  setTheme: handleTheme,
                  handleOpen: handleOpen,
                  closeShow: closeShow,
               }}> */}
            <Component {...pageProps} />
            {/* <ToastContainer /> */}
            {/* </AppContext.Provider> */}
         </PageTransition>
      </>
   );
}

const getInitialProps = async ({Component, ctx}) => {
   let pageProps = {};

   if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
   }

   return {pageProps};
};

App.getInitialProps = getInitialProps;
