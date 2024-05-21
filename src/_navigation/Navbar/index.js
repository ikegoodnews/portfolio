import React, {memo, useCallback, useContext, useRef} from 'react';
import {menuDrop} from '@/_constants';
import {useRouter} from 'next/router';
import classNames from 'classnames';
import Link from 'next/link';
import AppContext from '@/_utils/context';
import {Icon, Moon} from '@/_components';
import { useOnClickOutside } from '@/_utils';

// eslint-disable-next-line react/display-name
const Navbar = memo((props) => {
   const router = useRouter();
   const menuDropRef = useRef();
   const {show, handleOpen, setTheme, closeShow, theme} = useContext(AppContext);

   const activeRoute = useCallback(
      (link) => {
         return router.pathname === link;
      },
      [router.pathname],
   );

   useOnClickOutside(menuDropRef, () => {
      if (show) closeShow();
   });

   return (
      <nav className="navbar navbar-expand-lg d-flex align-items-center">
         <div className="container-fluid d-flex align-items-center">
            <div className="container px-0 position-relative d-flex align-items-center justify-content-between">
               <Link href="/home" tabIndex={show && -1}>
                  <div className="logo">G.I.</div>
               </Link>
               <button
                  className="navbar-toggler"
                  type="button"
                  onClick={handleOpen}
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  tabIndex={show && -1}>
                  <span className="navbar-toggler-icon" />
               </button>
               <div ref={menuDropRef} className={`collapse navbar-collapse ${show && 'show'}`} id="navbarSupportedContent">
                  {/* <button className="d-block d-md-none close-nav" onClick={handleOpen} type="button">
                     <Icon />
                  </button> */}
                  <ul className="navbar-nav ms-auto flex-row nav__list d-flex align-items-center">
                     {menuDrop
                        ?.filter((obj) => !obj.link.includes(router.pathname))
                        ?.map((item, i) => (
                           <li key={`menuItem-${i}`} className="text-capitalize ms-lg-4 mb-lg-0 mb-3">
                              <Link
                                 href={item.link}
                                 onClick={closeShow}
                                 aria-label={item.label}
                                 title={item.label}
                                 className={classNames('d-flex h-100 p-2', {active: activeRoute(item.link)})}>
                                 <span className="label">{item.label}</span>
                              </Link>
                           </li>
                        ))}
                     <li className="text-capitalize ms-lg-4">
                        <Link
                           href={'#!'}
                           aria-label={`Turn On ${theme === false ? 'Light' : 'Dark'} Mood`}
                           onClick={setTheme}
                           className="d-flex h-100">
                           <Moon />
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </nav>
   );
});

export default Navbar;
