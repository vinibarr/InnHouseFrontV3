
import { AxiosHelper } from '../helpers/AxiosHelper';


const Add = async (formData: FormData) => {
    return AxiosHelper.post('/newproperty', formData);
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


const PropertyService = {
    Add,
    ListOfTypes,
    ListOfAmenities,
    ListOfFeatures
}

export default PropertyService;