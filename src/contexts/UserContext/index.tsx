
import { createContext, useContext, useState, useCallback, useEffect, useMemo } from "react";
import IUser from "../../interfaces/IUser";
import AuthService from "../../services/AuthService";
import { useNotificationContext } from "../NotificationContext";
import { useLanguageContext } from "../LanguageContext";
import { authTokenStorage } from "../../helpers/StorageHelper";
import { HttpStatusEnum } from "../../data/Enums";


interface IUserContext {
    user: IUser | undefined;
	
    handleLogin: (formData: FormData) => void;
	handleLogout: () => void;
}


const UserContext = createContext<IUserContext | undefined>(undefined);

const UserContextProvider = (props: React.PropsWithChildren) => {
    const { showLoading, hideLoading, showToast, dismissToast } = useNotificationContext();
    const { handleChangeLanguage, translate } = useLanguageContext();

    const [user, setUser] = useState<IUser | undefined>(undefined);


    useEffect(() => {
        handleLoginWithStoredAuthToken();
        // eslint-disable-next-line
    }, []);


    const handleLogin = useCallback((formData: FormData) => {
        // AuthService.Login(formData)
        //     .then(resp => {
        //         setUser(resp.data.user as IUser);
        //     })
        //     .catch(() => {
        //         showToast("warning", translate('_userContextHandleLoginError'));
        //     });

        // eslint-disable-next-line
    }, []);


    const handleLogout = useCallback((closeAllToasts: boolean) => {
        // const formData = FormHelper.GenerateFormData(undefined);
        // AuthService.Logout(formData)
        //     .then(() => {
        //         authTokenStorage.remove();
        //         setUser(undefined);
                
        //         if (closeAllToasts) {
        //             dismissToast();
        //         }
        //     })
        //     .catch(err => {
        //         if (err.response.status === HttpStatusEnum.NotFound) {
        //             showToast("warning", translate('_userContextHandleLogoutError'));
        //         }
        //     });
        
        // eslint-disable-next-line
    }, []);


    const handleLoginWithStoredAuthToken = useCallback(() => {
        // const authTokenStored = authTokenStorage.get();
        
        // if (authTokenStored) {
        //     showLoading();

        //     const formData = FormHelper.GenerateFormData(undefined);
        //     AuthService.LoginWithStoredAuthToken(formData)
        //         .then(resp => {
        //             setUser(resp.data.user as IUser);
        //         })
        //         .catch(() => {
        //             handleLogout(true);
        //         })
        //         .finally(() => {
        //             hideLoading();
        //         });
        // } else {
        //     handleLogout(true);
        //     hideLoading();
        // }

        // eslint-disable-next-line
    }, []);


    const data: IUserContext = useMemo(() => {
        return {
            user,
            
            handleLogin,
            handleLogout: () => handleLogout(true)
        };

        // eslint-disable-next-line
    }, [user]);
    

    return (
        <UserContext.Provider value={data}>
            {props.children}
        </UserContext.Provider>
    );
}


const useUserContext = () => {
    const context = useContext(UserContext);

    if (context === undefined) {
        throw new Error('useUserContext must be used within a UserContextProvider');
    }

    return context;
}

export {
    useUserContext
}

export default UserContextProvider;