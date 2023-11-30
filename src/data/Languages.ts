
import ILanguage from '../interfaces/ILanguage';


const Languages: ILanguage[] = [
    {
        icon: require('../assets/images/languages/pt_br.png'),
        initials: "PT",
        text: 'portuguese',
        key: "pt_br",
        value: "pt-br"
    }, {
        icon: require('../assets/images/languages/en_us.png'),
        initials: "EN",
        text: 'english',
        key: "en_us",
        value: "en"
    }, {
        icon: require('../assets/images/languages/es_es.png'),
        initials: "ES",
        text: 'spanish',
        key: "es_es",
        value: "es"
    }
];

export default Languages;