
import { AxiosHelper } from '../helpers/AxiosHelper';


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


const PropertyService = {
    ListOfTypes,
    ListOfAmenities
}

export default PropertyService;