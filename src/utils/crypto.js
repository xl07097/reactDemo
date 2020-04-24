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

var key = 'BOTWAVEE';
//CBC模式加密
function encryptByDESModeCBC(message) {
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    var ivHex = CryptoJS.enc.Utf8.parse(key);
    encrypted = CryptoJS.DES.encrypt(message, keyHex, {
        iv: ivHex,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.ciphertext.toString();
}
//CBC模式解密
function decryptByDESModeCBC(ciphertext2) {
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    var ivHex = CryptoJS.enc.Utf8.parse(key);
    // direct decrypt ciphertext
    var decrypted = CryptoJS.DES.decrypt({
        ciphertext: CryptoJS.enc.Hex.parse(ciphertext2)
    }, keyHex, {
        iv: ivHex,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });


    return decrypted.toString(CryptoJS.enc.Utf8);
}


//DES  ECB模式加密
function encryptByDESModeEBC(message) {
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.ciphertext.toString();
}


//DES  ECB模式解密
function decryptByDESModeEBC(ciphertext) {
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    var decrypted = CryptoJS.DES.decrypt({
        ciphertext: CryptoJS.enc.Hex.parse(ciphertext)
    }, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
}