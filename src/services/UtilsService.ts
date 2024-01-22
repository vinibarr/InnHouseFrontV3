
import axios from 'axios';
import { AxiosHelper } from '../helpers/AxiosHelper';


const GetAddress = async (zipCode: string) => {
    return axios.get(`https://viacep.com.br/ws/${zipCode}/json/`);
}

const ListOfTypes = async (formData: FormData) => {
    return AxiosHelper.get('/tiposdetipos', {
        params: {
            ...Object.fromEntries(formData),
            token: null
        }
    });
}

const ListOfAmenities = async (formData: FormData) => {
    return AxiosHelper.get('/comodidades', {
        params: {
            ...Object.fromEntries(formData),
            token: null
        }
    });
}

const ListOfFeatures = async (formData: FormData) => {
    return AxiosHelper.get('/caracteristicas', {
        params: {
            ...Object.fromEntries(formData),
            token: null
        }
    });
}

const UtilsService = {
    GetAddress,
    ListOfTypes,
    ListOfAmenities,
    ListOfFeatures
}

export default UtilsService;