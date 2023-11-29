
import CryptoJS from "crypto-js";
import { KeyConstants } from "../data/Constants";


const privateCrypto = {
    _key: KeyConstants.privateKey,

    encrypt: function (string: string) {
        try {
            return CryptoJS.AES.encrypt(string, this._key).toString();
        } catch {
            console.warn(`It was not possible encrypt string on CryptoHelper`);
            return string;
        }
    },

    decrypt: function (string: string) {
        try {
            const bytes  = CryptoJS.AES.decrypt(string, this._key);
            return bytes.toString(CryptoJS.enc.Utf8);
        } catch {
            console.warn(`It was not possible decrypt string on CryptoHelper`);
            return string;
        }
    }
}


const CryptoHelper = {
    privateCrypto
};

export default CryptoHelper;