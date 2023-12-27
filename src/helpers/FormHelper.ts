
import { authTokenStorage, languageStorage } from "./StorageHelper";


const Create = (event: React.FormEvent<HTMLFormElement> | undefined) => {
    let formData = new FormData(event?.currentTarget);

    const storedAuthToken = authTokenStorage.get();
    if (storedAuthToken) {
        formData = Add(formData, 'token', storedAuthToken);
    }

    const storedLanguage = languageStorage.get();
    if (storedLanguage) {
        formData = Add(formData, 'language', storedLanguage.value);
    }

    return formData;
}


const Add = (formData: FormData, key: string, value: string | number | Blob | undefined) => {
    if (value === undefined) {
        return formData;
    }

    if (typeof value === 'number') {
        value = value.toString();
    }

    formData.append(key, value);
    return formData;
}



const FormHelper = {
    Create,
    Add
}

export default FormHelper;