import {Inter} from 'next/font/google';
import {Hexagon} from '@/_components';
import Home from './home';

const inter = Inter({subsets: ['latin']});

export default function HomePage() {
   return (
      <>
         <Home />

         {/* <Hexagon /> */}
      </>
   );
}
