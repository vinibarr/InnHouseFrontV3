
import { StorageConstants } from "../data/Constants";
import Languages from "../data/Languages";
import ILanguage from "../interfaces/ILanguage";
import CryptoHelper from "./CryptoHelper";


const authTokenStorage = {
    _storageName: StorageConstants.authTokenStorageName,

    get: function () {
        const authToken = CryptoHelper.privateCrypto.decrypt(sessionStorage.getItem(this._storageName) ?? '')
        return authToken;
    },

    set: function (authToken: string) {
        const authTokenEncrypted = CryptoHelper.privateCrypto.encrypt(authToken);
        sessionStorage.setItem(this._storageName, authTokenEncrypted);
    },

    remove: function () {
        sessionStorage.removeItem(this._storageName);
    }
}


const languageStorage = {
    _storageName: StorageConstants.languageStorageName,
    _defaultValue: Languages[0],

    validate: function (languageKey: string | null | undefined) {
        return Languages.find(lang => lang.key === languageKey) ?? this._defaultValue;
    },

    get: function () {
        const languageValue = CryptoHelper.privateCrypto.decrypt(localStorage.getItem(this._storageName) ?? '');
        return this.validate(languageValue);
    },

    set: function (language: ILanguage) {
        language = this.validate(language.key);
        
        const languageValueEncrypted = CryptoHelper.privateCrypto.encrypt(language.key);
        localStorage.setItem(this._storageName, languageValueEncrypted);
    }
}


export {
    authTokenStorage,
    languageStorage
}