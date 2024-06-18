import localForage from 'localforage';
import CryptoJS from 'crypto-js';

if (!(typeof window === 'undefined')) {
   localForage.setDriver([localForage.INDEXEDDB, localForage.LOCALSTORAGE, localForage.WEBSQL]);
}

const pass = 'GOO_DEV_LOCK';
export const passphrase = 'GOO_DEV';

export const getObjectFromStorage = async (key) => {
   try {
      return await localForage.getItem(key).then((data) => {
         if (pass && !!data) {
            data = CryptoJS.AES.decrypt(data, pass);
            data = data.toString(CryptoJS.enc.Utf8);
            return JSON.parse(data);
         }
         return data;
      });
   } catch (error) {
      throw error;
   }
};

export const setObjectInStorage = async (key, data) => {
   try {
      if (pass) {
         data = CryptoJS.AES.encrypt(JSON.stringify(data), pass).toString();
      }
      await localForage.setItem(key, data);
      return true;
   } catch (error) {
      throw error;
   }
};

export const clearObjectFromStorage = async (key) => {
   try {
      await localForage.removeItem(key);
      return true;
   } catch (error) {
      throw error;
   }
};
