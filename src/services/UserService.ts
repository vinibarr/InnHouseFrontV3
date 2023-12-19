
import { AxiosHelper } from '../helpers/AxiosHelper';


const UpdateProfile = async (formData: FormData) => {
    return AxiosHelper.post('/updateusers', formData);
}

const UserService = {
    UpdateProfile
}

export default UserService;