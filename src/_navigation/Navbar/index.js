import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import {useOnClickOutside, useRoutesCode} from '@/_helpers';
import {menuDrop} from '@/_constants';
import {useRouter} from 'next/router';
import classNames from 'classnames';
import Link from 'next/link';

// eslint-disable-next-line react/display-name
const Navbar = memo(() => {
   const code = useRoutesCode();
   const router = useRouter();
   const dropdownRef = useRef(null);
   const [dropdown, setDropdown] = useState(false);
   const [navHeight, setNavHeight] = useState(false);
   console.log(`navHeight=====>`, navHeight);

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
      <nav className={classNames('position-fixed d-flex align-items-center justify-content-', {navHeight})}>
         <div className="container-fluid d-flex align-items-center">
            {/* <nav className={classNames('sticky-top container-fluid d-flex align-items-center', {})}> */}
            <div className="container px-0 d-flex align-items-center justify-content-between">
               <div className="logo">GO.</div>
               <ul className={classNames('menu__dropdown d-flex align-items-center', {})}>
                  {menuDrop?.map((item, i) => (
                     <li
                        key={`menuDropItem-${i}`}
                        onClick={() => setDropdown(false)}
                        className={classNames('text-capitalize ms-4', {active: activeRoute(item.link)})}>
                        {/* onClick={ModalCenter.closeModal} */}
                        <Link href={item.link} className="d-flex h-100">
                           <span className="label">{item.label}</span>
                        </Link>
                     </li>
                  ))}
               </ul>
               <button className="action__button">click me.</button>
            </div>
         </div>
      </nav>
   );
});

export default Navbar;
// fixed: pathname === '/';
