import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/index.scss';
import '@/styles/globals.scss';
import {useEffect, useState} from 'react';
import {ToastContainer} from 'react-toastify';
import AppContext from '@/_utils/context';
import {PageTransition} from 'next-page-transitions';
import {clearObjectFromStorage, getObjectFromStorage, setObjectInStorage} from '@/_utils/storage';

if (process.env.NODE_ENV !== 'development') {
   console.log = () => {};
}

export default function App({Component, pageProps}) {
   const [show, setShow] = useState(true);
   const [theme, setTheme] = useState(getObjectFromStorage() ? true : false);

   useEffect(() => {
      // typeof document !== undefined &&
      require('bootstrap/dist/js/bootstrap.js');
   }, []);

   const loadTheme = () => {
      if (!theme) {
         clearObjectFromStorage();
      } else {
         setObjectInStorage(1);
      }
   };

   const handleOpen = () => {
      setShow(true);
   };
   const handleTheme = () => {
      setTheme((prev) => !prev);
   };
   const closeShow = () => {
      setShow(false);
   };

   return (
      <>
         <PageTransition timeout={200} classNames="page-transition" loadingDelay={100}>
            <AppContext.Provider
               key={Math.floor(Math.random() * Math.floor(20))}
               value={{
                  show: show,
                  theme: theme,
                  loadTheme: loadTheme,
                  setTheme: handleTheme,
                  handleOpen: handleOpen,
                  closeShow: closeShow,
               }}>
               <Component {...pageProps} />
               <ToastContainer />
            </AppContext.Provider>
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
