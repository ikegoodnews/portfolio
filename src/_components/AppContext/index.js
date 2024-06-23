import {createContext, useState} from 'react';

export const AppContext = createContext();

export const AppProvider = ({children}) => {
   const [open, setOpen] = useState(false);

   // useEffect(() => {
   //    (async () => {
   //       const storedEvents = (await getObjectFromStorage(eventsKey)) || {};
   //       setEvents(storedEvents);
   //    })();
   // }, []);

   const openMenu = () => {
      setOpen(true);
   };

   const closeMenu = () => {
      setOpen(true);
   };

   return (
      <>
         <AppContext.Provider value={{open, openMenu, closeMenu}}>{children}</AppContext.Provider>;
      </>
   );
};
