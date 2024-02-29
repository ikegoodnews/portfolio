import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import {useOnClickOutside, useRoutesCode} from '@/_helpers';
import {menuDrop} from '@/_constants';
import {useRouter} from 'next/router';
import classNames from 'classnames';
import Link from 'next/link';

// import CV from '../../../public/_assets/pdf/CV_GOODNEWS_OGECHUKWU_IKE.pdf';

// eslint-disable-next-line react/display-name
const Navbar = memo(() => {
   const code = useRoutesCode();
   const router = useRouter();
   const dropdownRef = useRef(null);
   const [el, setEl] = useState(null);
   const [dropdown, setDropdown] = useState(false);
   const [navHeight, setNavHeight] = useState(false);
   // console.log(`navHeight=====>`, navHeight);

   useOnClickOutside(dropdownRef, () => {
      if (dropdown) setDropdown(false);
   });

   const activeRoute = useCallback(
      (link) => {
         return router.asPath === link;
      },
      [router.asPath],
   );

   const changeNavHeight = () => {
      if (window.scrollY >= 40) {
         setNavHeight(true);
      } else {
         setNavHeight(false);
      }
   };

   useEffect(() => {
      // console.log(`window=====>`, window);
      window.addEventListener('scroll', changeNavHeight);

      return () => window.removeEventListener('scroll', changeNavHeight);
   }, []);

   return (
      <nav className={classNames('position-fixed d-flex align-items-center justify-content-center', {navHeight})}>
         <div className="container-fluid d-flex align-items-center">
            <div className="container px-0 d-flex align-items-center justify-content-between">
               <div className="logo">GO.</div>
               <ul className={classNames('nav__list d-flex align-items-center', {})}>
                  {menuDrop?.map((item, i) => (
                     <li key={`menuDropItem-${i}`} onClick={() => setDropdown(false)} className="text-capitalize ms-4">
                        <button
                           // href={item.link}
                           onClick={() => {
                              const element = document.getElementById(item.label);
                              setEl(element);
                              element?.scrollIntoView({
                                 behavior: 'smooth',
                              });
                           }}
                           className={classNames('d-flex h-100', {active: el === item.label})}>
                           <span className="label">{item.label}</span>
                        </button>
                     </li>
                  ))}
               </ul>
               <div className="">
                  <a
                     href="./_assets/pdf/CV_GOODNEWS_OGECHUKWU_IKE.pdf"
                     target="_blank"
                     alt="GOODNEWS OGECHUKWU IKE CV"
                     rel="noopener noreferrer"
                     className="action__button">
                     <i class="fa fa-download" aria-hidden="true"></i> CV.
                  </a>
               </div>
            </div>
         </div>
      </nav>
   );
});

export default Navbar;
