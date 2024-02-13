import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.scss';
import '@/styles/index.scss';
import {useEffect} from 'react';

if (process.env.NODE_ENV !== 'development') {
   console.log = () => {};
}

export default function App({Component, pageProps}) {
   useEffect(() => {
      require('bootstrap/dist/js/bootstrap.js');
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return <Component {...pageProps} />;
}
