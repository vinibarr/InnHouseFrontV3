
import DefaultTranslation from '../translations/DefaultTranslation';


const allTranslations: Record<string, Record<string, string>> = {
    ...DefaultTranslation
};

const FindTranslation = (key: string) => {
    if (allTranslations[key]) {
        return allTranslations[key];
    }
    
    console.warn(`Translation not found: ${key}`);
    return DefaultTranslation.translationNotFound;
}


const LanguageHelper = {
    FindTranslation
}


export default LanguageHelper;