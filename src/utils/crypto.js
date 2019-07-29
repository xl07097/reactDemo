import CryptoJS from "crypto-js";

//APP AES
// 加密
export function Encrypt(word, aeskey, ivkey) {
    //APP AES
    var key = CryptoJS.enc.Utf8.parse(aeskey);
    //APP IV KEY
    var iv = CryptoJS.enc.Utf8.parse(ivkey);

    var srcs = CryptoJS.enc.Utf8.parse(word);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.ciphertext.toString().toLowerCase();
}

// 解密
export function Decrypt(word, aeskey, ivkey) {
    //APP AES
    var key = CryptoJS.enc.Utf8.parse(aeskey);
    //APP IV KEY
    var iv = CryptoJS.enc.Utf8.parse(ivkey);
    var encryptedHexStr = CryptoJS.enc.Hex.parse(word);
    var srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
    var decrypt = CryptoJS.AES.decrypt(srcs, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
}