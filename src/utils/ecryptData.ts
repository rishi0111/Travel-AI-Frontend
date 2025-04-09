import CryptoJS from 'crypto-js';

export interface LoginFormInputs {
     email?: string;
     password?: string;
     username?: string;
}

export const encryptData = (data: LoginFormInputs) => {
     const iv = CryptoJS.lib.WordArray.random(16);
     const secretKey = import.meta.env.VITE_CRYPTO_SECRET_KEY;
     const encrypted = CryptoJS.AES.encrypt(
          JSON.stringify(data),
          CryptoJS.enc.Utf8.parse(secretKey),
          {
               iv: iv,
               mode: CryptoJS.mode.CBC,
               padding: CryptoJS.pad.Pkcs7,
          }
     );

     return {
          token: encrypted.ciphertext.toString(CryptoJS.enc.Base64),
          iv: iv.toString(CryptoJS.enc.Base64),
     };
};

