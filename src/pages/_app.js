import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/index.scss';
import '@/styles/globals.scss';
import {useEffect} from 'react';
import {PageTransition} from 'next-page-transitions';
import {AppProvider} from '@/_components/AppContext';

if (process.env.NODE_ENV !== 'development') {
   console.log = () => {};
}

export default function App({Component, pageProps}) {
   useEffect(() => {
      // typeof document !== undefined &&
      require('bootstrap/dist/js/bootstrap.js');
   }, []);

   return (
      <>
         <PageTransition timeout={200} classNames="page-transition" loadingDelay={100}>
            <AppProvider>
               <Component {...pageProps} />
            </AppProvider>
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
