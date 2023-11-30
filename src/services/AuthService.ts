
import { AxiosHelper } from '../helpers/AxiosHelper';


const SignIn = async (formData: FormData) => {
    return AxiosHelper.post('/login', formData);
}

const SignUp = async (formData: FormData) => {
    return AxiosHelper.post('/sign-up', formData);
}

const SignUpEmailConfirmation = async (formData: FormData) => {
    return AxiosHelper.post('/email-confirmation', formData);
}

const ForgotPassword = async (formData: FormData) => {
    return AxiosHelper.post('/forgot-password', formData);
}

const ResetPassword = async (formData: FormData) => {
    return AxiosHelper.post('/reset-password', formData);
}


const AuthService = {
    SignIn,
    SignUp,
    SignUpEmailConfirmation,
    ForgotPassword,
    ResetPassword
}

export default AuthService;