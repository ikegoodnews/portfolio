import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/index.scss';
import '@/styles/globals.scss';
import {useEffect} from 'react';

if (process.env.NODE_ENV !== 'development') {
   console.log = () => {};
}

export default function App({Component, pageProps}) {
   useEffect(() => {
      // typeof document !== undefined &&
      require('bootstrap/dist/js/bootstrap.js');
   }, []);

   return <Component {...pageProps} />;
}
