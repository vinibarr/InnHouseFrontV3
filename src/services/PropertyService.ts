
import { AxiosHelper } from '../helpers/AxiosHelper';


const Add = async (formData: FormData) => {
    return AxiosHelper.post('/newproperty', formData);
}


const Get = async (formData: FormData) => {
    return AxiosHelper.post('/getallproperty', formData);
}

const List = async (formData: FormData) => {
    return AxiosHelper.post('/getallproperty', formData);
}


const PropertyService = {
    Add,
    Get,
    List
}

export default PropertyService;