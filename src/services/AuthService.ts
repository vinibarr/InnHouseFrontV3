
import { AxiosHelper } from '../helpers/AxiosHelper';


const Login = async (formData: FormData) => {
    return AxiosHelper.post('/Auth/Login', formData);
}

const Logout = async (formData: FormData) => {
    return AxiosHelper.post('/Auth/Logout', formData);
}

const LoginWithStoredAuthToken = async (formData: FormData) => {
    return AxiosHelper.post('/Auth/LoginWithStoredAuthToken', formData);
}

const RecoverPassword = async (formData: FormData) => {
    return AxiosHelper.post('/Auth/RecoverPassword', formData);
}


const AuthService = {
    Login,
    Logout, 
    LoginWithStoredAuthToken,
    RecoverPassword
}

export default AuthService;