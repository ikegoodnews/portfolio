// import Link from 'next/link';
// import {useRouter} from 'next/router';
// import React, {memo, useCallback, useRef, useState} from 'react';
// import classNames from 'classnames';

// // import { MenuMap, NavMap } from '../../model';
// import {menuDrop, useRoutesCode} from '../_helpers';
// import useOnClickOutside from '../_components/onClickOutside';

import {menuDrop} from '@/_constants';
import {useOnClickOutside, useRoutesCode} from '@/_helpers';
import classNames from 'classnames';
import Link from 'next/link';
import {useRouter} from 'next/router';
import React, {memo, useCallback, useRef, useState} from 'react';

// eslint-disable-next-line react/display-name
const Navbar = memo(() => {
   const code = useRoutesCode();
   const {pathname} = useRouter();
   const dropdownRef = useRef(null);
   const [dropdown, setDropdown] = useState(false);

   useOnClickOutside(dropdownRef, () => {
      if (dropdown) setDropdown(false);
   });

   const activeRoute = useCallback(
      (num) => {
         return code === num;
      },
      [code],
   );

   return (
      <nav className={classNames('container-fluid d-flex align-items-center', {fixed: pathname === '/'})}>
         <div className="container py-4 px-0 d-flex align-items-center justify-content-between">
            <div className="logo">GO.</div>
            <ul className={classNames('menu__dropdown d-flex align-items-center', {})}>
               {menuDrop?.map((item, i) => (
                  <li
                     key={`menuDropItem-${i}`}
                     onClick={() => setDropdown(false)}
                     className={classNames('text-capitalize ms-4', {active: activeRoute(item.active)})}>
                     {/* onClick={ModalCenter.closeModal} */}
                     <Link href={item.link} className="d-flex h-100">
                        <span className="label">{item.label}</span>
                     </Link>
                  </li>
               ))}
            </ul>
         </div>
      </nav>
   );
});

export default Navbar;
