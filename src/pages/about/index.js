import Title from '@/_components/Title';
import {Layout} from '@/_components';
import Link from 'next/link';
import React from 'react';

const About = () => {
   return (
      <Layout title="About" className="about__section py-lg-5 py-4" aria-label="You are now in my about section">
         <div className="w-100">
            <Title label="" title="about me" />

            <ul className="about__me mt-4 pe-md-5">
               <li className="">
                  I am a passionate software developer with over 3 years of professional experience in the industry. My expertise lies in website, web
                  application, desktop application, and mobile application development, and I am proficient in languages and technologies including
                  JavaScript, Next.js, React.js, Redux/Redux-saga, Dart, Flutter, Bootstrap, Tailwind.
               </li>
               <li className="">
                  I have a strong background in live audio-streaming platform, fin-tech, e-commerce, educational tech, and dedicated to creating
                  efficient, scalable, and user-friendly solutions. My work often involves building web applications, binding APIs to frontend,
                  optimizing web apps, etc.
               </li>
               <li className="">
                  One of my key strengths is my ability to quickly adapt to new technologies and frameworks, ensuring that I stay current with
                  industry trends. I thrive in collaborative environments and enjoy working with cross-functional teams to deliver high-quality
                  products.
               </li>
               <li className="">
                  In addition to my technical skills, I am a strong communicator and problem solver, able to understand and address complex
                  requirements and issues. I am always eager to take on new challenges and continuously improve my skills.
               </li>
               <li className="">
                  Thank you for taking the time to learn a bit about me. I look forward to <Link href="/contact">connecting</Link> and exploring
                  opportunities to work together!
               </li>
            </ul>
         </div>
      </Layout>
   );
};

export default About;
