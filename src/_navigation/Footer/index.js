import {Facebook, Github, IconRight, Instagram, Linkedin, Twitter} from '@/_helpers';
import Link from 'next/link';
import React, {memo} from 'react';

// eslint-disable-next-line react/display-name
const Footer = memo((props) => {
   return (
      <footer className="my-5">
         <Link href={`${props.link}`}>
            <p className="">
               {props.label}
               <IconRight />
            </p>
         </Link>
         <div className="social__handles mt-5 d-flex align-items-center">
            <a
               className="me-3"
               title="LinkedIn Page"
               rel="noopener noreferrer"
               href="https://linkedin.com/in/goodnews-ike"
               aria-label="Go To Goodnews Ike LinkedIn Page">
               <Linkedin />
            </a>
            <a
               className="mx-3"
               title="Github Page"
               rel="noopener noreferrer"
               href="https://github.com/goodnewsike"
               aria-label="Go To Goodnews Ike Github Page">
               <Github />
            </a>
            <a
               className="mx-3"
               title="Twitter Page"
               rel="noopener noreferrer"
               href="https://twitter.com/goodnews-ike"
               aria-label="Go To Goodnews Ike Twitter Page">
               <Twitter />
            </a>
            <a
               className="mx-3"
               title="Instagram Page"
               rel="noopener noreferrer"
               href="https://instagram.com/_goodnewsike"
               aria-label="Go To Goodnews Ike Instagram Page">
               <Instagram />
            </a>
            <a
               className="ms-3"
               title="Facebook Page"
               rel="noopener noreferrer"
               href="https://facebook.com/Gudniuzplanet"
               aria-label="Go To Goodnews Ike Facebook Page">
               <Facebook />
            </a>
         </div>
      </footer>
   );
});

export default Footer;
