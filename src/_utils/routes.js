import React from 'react';

export const getLocationName = (link) => {
   switch (link) {
      case '/':
         return 'Hi, There';
      case '/#!':
         return 'Hi, There';
      case '/home':
         return 'Hi, There';
      case '/about':
         return 'About Me';
      case '/projects':
         return 'Projects';
      case '/resume':
         return 'Resume';
      case '/contact':
         return 'Contact Me';
      default:
         return '';
   }
};

export const footerLabel = (num) => {
   switch (num) {
      case 1:
         return 'See More About Me';
      case 2:
         return 'Continue To Projects';
      case 3:
         return 'Continue to My Resume';
      case 4:
         return 'Are you convinced to contact me now ?';
      case 5:
         return 'Go back home.';
      default:
         return '';
   }
};

export const footerLink = (num) => {
   switch (num) {
      case 1:
         return '/about';
      case 2:
         return '/projects';
      case 3:
         return '/resume';
      case 4:
         return '/contact';
      case 5:
         return '/home';
      default:
         return '';
   }
};
