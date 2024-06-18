import {getObjectFromStorage, setObjectInStorage} from './storage';

export const setTheme = (themeName, setClassName) => {
   setObjectInStorage('theme', themeName);
   setClassName(themeName);
};

export const keepTheme = (setClassName) => {
   const theme = getObjectFromStorage('theme');
   if (theme) {
      setTheme(theme, setClassName);
      return;
   }

   const prefersLightTheme = window.matchMedia('(prefers-color-scheme: light)');
   if (prefersLightTheme.matches) {
      setTheme('theme-light', setClassName);
      return;
   }

   setTheme('theme-dark', setClassName);
};
