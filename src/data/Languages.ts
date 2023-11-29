
import ILanguage from '../interfaces/ILanguage';


const Languages: ILanguage[] = [
    {
        icon: require('../assets/images/languages/pt_br.png'),
        initials: "PT",
        text: 'portuguese',
        value: "pt_br"
    }, {
        icon: require('../assets/images/languages/en_us.png'),
        initials: "EN",
        text: 'english',
        value: "en_us"
    }, {
        icon: require('../assets/images/languages/es_es.png'),
        initials: "ES",
        text: 'spanish',
        value: "es_es"
    }
];

export default Languages;