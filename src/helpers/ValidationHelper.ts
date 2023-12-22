

const MaxLength = (value: string, maxLength: number, setter: React.Dispatch<React.SetStateAction<any>>) => {
    setter(value.substring(0, maxLength));
}


const IsEmpty = (value: string | number) => {
    return (value === undefined || value === null || value.toString().trim().length === 0);
}

const IsNumber = (value: string) => {
    return !isNaN(parseFloat(value));
}

const IsEmail = (email: string) => {
    const regex = /\S+@\S+/;
    return regex.test(email);
}

const IsCep = (cep: string) => {
    cep = cep.replace(/([^\d])+/gim, '');
    return cep.length === 8;
}

const IsPhone = (phone: string) => {
    phone = phone.replace(/([^\d])+/gim, '');
    return phone.length === 10 || phone.length === 11 || phone.length === 13;
}

const IsUrl = (url: string) => {
    try {
        new URL(url);
        return true;
    } catch(ex) {
        return false;
    }
}



const ValidationHelper = {
    MaxLength,
    IsEmpty,
    IsNumber,
    IsEmail,
    IsCep,
    IsPhone,
    IsUrl
}

export default ValidationHelper;