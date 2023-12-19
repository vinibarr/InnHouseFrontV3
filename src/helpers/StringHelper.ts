
const RandomText = (length: number, upper: boolean, lower: boolean, numbers: boolean, symbols: boolean) => {
    let text = '';
    let characters = '';

    if (upper) {
        characters += "ABCDEFGHIJKLMNOPQRSTUVYXWZ";
    }
 
    if (lower) {
        characters += "abcdefghijklmnopqrstuvyxwz";
    }
     
    if (numbers) {
        characters += "0123456789";
    }
     
    if (symbols) {
        characters += "!@#$%&*()_+=";
    }

    const charactersLength = characters.length;
    
    for (let i = 0; i < length; i++) {
      text += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return text;
}


const FirstLetterUpperCase = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const FirstLetterLowerCase = (string: string) => {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

const OnlyNumbers = (string: string) => {
    return string.replace(/\D/g, '');
}

const TrimAll = (string: string, pattern: string = '') => {
    return string.replace(/ /g, pattern);
}



const StringHelper = {
    RandomText,
    FirstLetterUpperCase,
    FirstLetterLowerCase,
    OnlyNumbers,
    TrimAll
};

export default StringHelper;