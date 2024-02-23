// import Head from 'next/head';
import {Inter} from 'next/font/google';
// import { Navbar } from '@/_navigation';
// import { Hexagon } from '@/_components';
import Home from './home';

const inter = Inter({subsets: ['latin']});

export default function HomePage() {
   return <Home />;
}
