// import {withRouter} from 'next/router';
// import React, {memo, useEffect, useRef} from 'react';
// import classNames from 'classnames';
// // import { PageLayoutProps } from '../../model';
// import Navbar from './Navbar';
// import {footerLabel, footerLink, getLocationName, useRoutesCode} from '../_helpers';
// import {Footer, SkipToContent, Title} from '../_components';

import {footerLabel, footerLink, getLocationName, useRoutesCode} from '@/_helpers';
import {Footer, Navbar} from '@/_navigation';
import classNames from 'classnames';
import React, {memo, useEffect} from 'react';
import SkipToContent from '../SkipToContent';
import Title from '../Title';

// eslint-disable-next-line react/display-name
const Layout = memo((props) => {
   const code = useRoutesCode();

   useEffect(() => {
      const cursorChange = document.querySelector('.mouse__handle');
      document.addEventListener('mousemove', (e) => {
         // console.log('e', e);
         cursorChange.setAttribute('style', `top: ${e.pageY}px; left: ${e.pageX}px;`);
      });
      document.addEventListener('onclick', (e) => {
         cursorChange.classList.add('expand');
         setTimeout(() => {
            cursorChange.classList.remove('expand');
         }, 500);
      });
   }, []);

   return (
      <section className="PageLayout container-fluid p-0">
         <div className="PageLayout__Backdrop" />
         <div className="mouse__handle" />
         <div className={classNames('PageLayout__Contents container px-0', props.className)}>
            <SkipToContent content="main-content" />
            <Navbar />
            <div className="row m-0 align-items-center justify-content-center">
               <div className="col-md-10">
                  <div className="layout__content">
                     <Title title={getLocationName(code)} />
                     <div className="mt-4 pb-4">{props.children}</div>
                     <Footer label={footerLabel(code)} link={footerLink(code)} />
                  </div>
               </div>
            </div>
         </div>
         <div className={classNames('pageName', {somePages: code !== 2 && code !== 5})}>{getLocationName(code)}.</div>
      </section>
   );
});

export default Layout;
