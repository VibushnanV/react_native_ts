import CryptoJS from 'react-native-crypto-js';
const  encrypt = (value: any, key: string) => {
  try {
    const encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(value),
      key,
    ).toString();
    return encrypted;
  } catch (err) {
     console.log(err, 'crypto');
    return null;
   
  }
};
const decrypt = (text: any, key: string) => {
  try {
    const decrypted = CryptoJS.AES.decrypt(text, key);
    const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decryptedText);
  } catch (err) {
    return null;
  }
};

export {encrypt, decrypt};
