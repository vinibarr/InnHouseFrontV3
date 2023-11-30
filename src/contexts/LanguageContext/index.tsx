
import { createContext, useContext, useState, useCallback, useMemo } from "react";
import LanguageHelper from "../../helpers/LanguageHelper";
import { languageStorage } from "../../helpers/StorageHelper";
import ILanguage from "../../interfaces/ILanguage";


interface ILanguageContext {
    language: ILanguage;
    handleChangeLanguage: (languageValue: string) => void;
    translate: (text: string, languageValue?: string) => string;
}


const LanguageContext = createContext<ILanguageContext | undefined>(undefined);

const LanguageContextProvider = (props: React.PropsWithChildren) => {
    const [language, handleChangeLanguage] = useState<ILanguage>(languageStorage.get());
    
    const _handleChangeLanguage = useCallback((languageValue: string) => {
        const language = languageStorage.validate(languageValue);
        
        languageStorage.set(language);
        handleChangeLanguage(language);

        // eslint-disable-next-line
    }, []);


    const handleTranslation = useCallback((text: string, key?: string) => {
        key = languageStorage.validate(key ?? language.key).key;
        return LanguageHelper.FindTranslation(text)[key];

        // eslint-disable-next-line
    }, [language]);


    const data: ILanguageContext = useMemo(() => {
        return {
            language,
            handleChangeLanguage: _handleChangeLanguage,
            translate: handleTranslation
        };
        
        // eslint-disable-next-line
    }, [language]);

    return (
        <LanguageContext.Provider value={data}>
            {props.children}
        </LanguageContext.Provider>
    );
}


const useLanguageContext = () => {
    const context = useContext(LanguageContext);
    
    if (context === undefined) {
        throw new Error('useLanguageContext must be used within a LanguageContextProvider');
    }
    
    return context;
}


export {
    useLanguageContext
}

export default LanguageContextProvider;