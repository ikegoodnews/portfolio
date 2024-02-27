import {getLocationName} from '@/_helpers';
import classNames from 'classnames';
import {useRouter} from 'next/router';
import React, {memo} from 'react';

// eslint-disable-next-line react/display-name
const SectionWrapper = memo((props) => {
   const router = useRouter();
   console.log(`router.asPath=====>`, router.asPath);

   return (
      <section id={props.sectionId} className={classNames('section__wrapper', props.className)}>
         {props.children}
         {/* <div className={classNames('pageName somePages', {})}>{getLocationName(router.asPath)}.</div> */}
      </section>
   );
});

export default SectionWrapper;
