export const kFormatter = (num) => {
   return Math.abs(num) > 999 ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k' : Math.sign(num) * Math.abs(num);
};

export function timeSince(date) {
   var seconds = Math.floor((new Date() - new Date(date)) / 1000);

   var interval = seconds / 31536000;

   if (interval > 1) {
      if (Math.floor(interval) > 1) {
         return Math.floor(interval) + ' years ago';
      } else {
         return Math.floor(interval) + ' year ago';
      }
   }
   interval = seconds / 2592000;

   if (interval > 1) {
      if (Math.floor(interval) > 1) {
         return Math.floor(interval) + ' months ago';
      } else {
         return Math.floor(interval) + ' month ago';
      }
   }
   interval = seconds / 604800;
   if (interval > 1) {
      if (Math.floor(interval) > 1) {
         return Math.floor(interval) + ' weeks ago';
      } else {
         return Math.floor(interval) + ' week ago';
      }
   }
   interval = seconds / 86400;
   if (interval > 1) {
      if (Math.floor(interval) > 1) {
         return Math.floor(interval) + ' days ago';
      } else {
         return Math.floor(interval) + ' day ago';
      }
   }
   interval = seconds / 3600;
   if (interval > 1) {
      if (Math.floor(interval) > 1) {
         return Math.floor(interval) + ' hours ago';
      } else {
         return Math.floor(interval) + ' hour ago';
      }
   }
   interval = seconds / 60;
   if (interval > 1) {
      if (Math.floor(interval) > 1) {
         return Math.floor(interval) + ' minutes ago';
      } else {
         return Math.floor(interval) + ' minute ago';
      }
   }
   return Math.floor(seconds) + ' seconds ago';
}

export const numToString = (num, bool) => {
   switch (num) {
      case 1:
         return bool ? 'first' : 'one';
      case 2:
         return bool ? 'second' : 'two';
      case 3:
         return bool ? 'third' : 'three';
      case 4:
         return bool ? 'fourth' : 'four';
      case 5:
         return bool ? 'fifth' : 'five';
      case 6:
         return bool ? 'sixth' : 'six';
      case 7:
         return bool ? 'seventh' : 'seven';
      case 8:
         return bool ? 'eighth' : 'eight';
      case 9:
         return bool ? 'ninth' : 'nine';
      case 10:
         return bool ? 'tenth' : 'ten';
      default:
         return '';
   }
};
