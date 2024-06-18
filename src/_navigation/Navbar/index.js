import React, {memo, useCallback, useContext, useEffect, useRef} from 'react';
import {menuDrop} from '@/_constants';
import {useRouter} from 'next/router';
import classNames from 'classnames';
import Link from 'next/link';
import AppContext from '@/_utils/context';
import {Icon, Moon} from '@/_components';
import {useOnClickOutside} from '@/_utils';
import {getObjectFromStorage} from '@/_utils/storage';
import {setTheme} from '@/_utils/theme';

// eslint-disable-next-line react/display-name
const Navbar = memo((props) => {
   const router = useRouter();
   const menuDropRef = useRef();
   const {show, handleOpen, setTheme, closeShow} = useContext(AppContext);

   const theme = getObjectFromStorage('theme');

   const changeThemeAndToggle = () => {
      if (theme === 'theme-dark') {
         setTheme('theme-light', props.setClassName);
         // setActive(true);
         // setAriaActive(false);
      } else {
         setTheme('theme-dark', props.setClassName);
         // setActive(false);
         // setAriaActive(true);
      }
   };

   // const handleOnClick = () => {
   //    changeThemeAndToggle();
   // };

   // const handleKeypress = (e) => {
   //    if (e.code === 'Enter') {
   //       changeThemeAndToggle();
   //    }
   // };

   // useEffect(() => {
   //    if (theme === 'theme-dark') {
   //       setActive(true);
   //    } else if (theme === 'theme-light') {
   //       setActive(false);
   //    }
   // }, [theme]);

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
               <Link href="/home" tabIndex={show ? -1 : undefined}>
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
                  tabIndex={show ? -1 : undefined}>
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
                     <li className="text-capitalize ms-lg-4 ps-lg-3">
                        <span
                           // href={'#!'}
                           aria-label={`Turn On ${theme === false ? 'Light' : 'Dark'} Mood`}
                           data-theme={`${theme === false ? 'light' : 'dark'}`}
                           onClick={changeThemeAndToggle}
                           className="d-flex h-100">
                           <Moon />
                        </span>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </nav>
   );
});

export default Navbar;
