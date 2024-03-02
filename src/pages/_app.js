import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/index.scss';
import '@/styles/globals.scss';
import {useEffect} from 'react';
import {ToastContainer} from 'react-toastify';

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
         <Component {...pageProps} />
         <ToastContainer />
      </>
   );
}
