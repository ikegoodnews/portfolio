import {footerSocial} from '@/_constants';
// import {IconRight} from '@/_utils';
import React, {memo} from 'react';
import Link from 'next/link';
import {IconRight} from '@/_components/Icons';

// eslint-disable-next-line react/display-name
const Footer = memo((props) => {
   return (
      <footer className="my-5">
         <Link href={`${props.link}`} className="d-inline-flex mb-lg-0 mb-5">
            <p className="d-flex align-items-center">
               {props.label}
               <IconRight />
            </p>
         </Link>
         <div className="social__handles mt-lg-5 d-flex align-items-center">
            {footerSocial?.map((obj, i) => (
               <a key={i} className="" title={obj?.title} rel="noopener noreferrer" href={obj?.href} aria-label={`Go To Goodnews Ike ${obj?.title}`}>
                  {obj?.icon}
               </a>
            ))}
         </div>
      </footer>
   );
});

export default Footer;
