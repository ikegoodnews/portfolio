import {useRouter} from 'next/router';
import {useEffect} from 'react';

export const useOnClickOutside = (ref, handler) => {
   // https://usehooks.com/useOnClickOutside/
   useEffect(
      () => {
         const listener = (event) => {
            // Do nothing if clicking ref's element or descendent elements
            if (!ref.current || ref.current.contains(event.target)) {
               return;
            }

            handler(event);
         };

         document.addEventListener('mousedown', listener);
         document.addEventListener('touchstart', listener);

         return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
         };
      },
      // Add ref and handler to effect dependencies
      // It's worth noting that because passed in handler is a new ...
      // ... function on every render that will cause this effect ...
      // ... callback/cleanup to run every render. It's not a big deal ...
      // ... but to optimize you can wrap handler in useCallback before ...
      // ... passing it into this hook.
      [ref, handler],
   );
};

export const useMatch = (path) => {
   const {pathname} = useRouter();

   return pathname === path;
};

export const useRoutesCode = () => {
   const {asPath, pathname, query} = useRouter();

   const home = asPath === '/';
   const about = asPath === '/about';
   const projects = asPath === '/projects';
   const services = asPath === '/services';
   const contact = asPath === '/contact';

   if (home) {
      return 1;
   } else if (about) {
      return 2;
   } else if (projects) {
      return 3;
   } else if (services) {
      return 4;
   } else if (contact) {
      return 5;
   } else {
      return 6;
   }
};

export const useIsAuthRoute = () => {
   const {pathname} = useRouter();

   const routes = ['/login', '/forgot-password', '/user/reset/token/:token', '/update-password', '/users/[email]/verify/[verification_code]'];

   const checker = (route) => routes.indexOf(route) !== -1;

   return checker(pathname);
};
