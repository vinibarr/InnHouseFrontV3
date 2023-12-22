
import axios from 'axios';


const FindZipCode = async (zipCode: string) => {
    return axios.get(`https://viacep.com.br/ws/${zipCode}/json/`);
}

const UtilsService = {
    FindZipCode
}

export default UtilsService;