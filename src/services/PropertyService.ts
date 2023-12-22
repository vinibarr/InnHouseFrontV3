
import { AxiosHelper } from '../helpers/AxiosHelper';


const ListOfTypes = async (formData: FormData) => {
    return AxiosHelper.get('/tiposdetipos', {
        params: {
            ...Object.fromEntries(formData),
            token: null
        }
    });
}

const PropertyService = {
    ListOfTypes
}

export default PropertyService;