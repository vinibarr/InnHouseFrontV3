
import { authTokenStorage, languageStorage } from "./StorageHelper";


const GenerateFormData = (event: React.FormEvent<HTMLFormElement> | undefined) => {
    let formData = new FormData(event?.currentTarget);

    const storedAuthToken = authTokenStorage.get();
    if (storedAuthToken) {
        formData = IncludeKeyValueOnFormData(formData, 'authToken', storedAuthToken);
    }

    const storedLanguage = languageStorage.get();
    if (storedLanguage) {
        formData = IncludeKeyValueOnFormData(formData, 'language', storedLanguage.value);
    }

    return formData;
}


const IncludeKeyValueOnFormData = (formData: FormData, key: string, value: string | number | Blob | undefined) => {
    if (value === undefined) {
        return formData;
    }
    
    if (formData.has(key)) {
        formData.delete(key);
    }

    if (typeof value === 'number') {
        value = value.toString();
    }

    formData.append(key, value);
    return formData;
}



const FormHelper = {
    GenerateFormData,
    IncludeKeyValueOnFormData
}

export default FormHelper;