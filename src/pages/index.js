import {Inter} from 'next/font/google';
import {Layout} from '@/_components';
import {About, Contact, Experience, Hero, Projects} from '@/_components/Page';

const inter = Inter({subsets: ['latin']});

export default function HomePage() {
   return (
      <Layout className="main__home position-relative">
         <Hero />

         <About />

         <Experience />

         <Projects />

         <Contact />
      </Layout>
   );
}
