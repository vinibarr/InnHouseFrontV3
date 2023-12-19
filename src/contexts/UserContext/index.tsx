
import { createContext, useContext, useState, useCallback, useMemo, useEffect } from "react";
import IUser from "../../interfaces/IUser";
import AuthService from "../../services/AuthService";
import FormHelper from "../../helpers/FormHelper";
import { authTokenStorage } from "../../helpers/StorageHelper";
import { useNotificationContext } from "../NotificationContext";


interface IUserContext {
    user: IUser | undefined;
	
    handleLogin: (formData: FormData) => void;
	handleLogout: () => void;
}


const UserContext = createContext<IUserContext | undefined>(undefined);

const UserContextProvider = (props: React.PropsWithChildren) => {
    const { dismissToast } = useNotificationContext();

    const [user, setUser] = useState<IUser | undefined>(undefined);


    useEffect(() => {
        handleLoginWithStoredAuthToken();
        // eslint-disable-next-line
    }, []);


    const handleLogin = useCallback((formData: FormData) => {
        AuthService.SignIn(formData)
            .then(resp => {
                setUser(resp.data as IUser);
            })
            .catch((err) => { });

        // eslint-disable-next-line
    }, []);


    const handleLogout = useCallback((closeAllToasts: boolean) => {
        const formData = FormHelper.Create(undefined);
        AuthService.Logoff(formData)
            .then(() => {
                authTokenStorage.remove();
                setUser(undefined);
                
                if (closeAllToasts) {
                    dismissToast();
                }
            })
            .catch(err => { });
        
        // eslint-disable-next-line
    }, []);


    const handleLoginWithStoredAuthToken = useCallback(() => {
        const authTokenStored = authTokenStorage.get();
        
        if (authTokenStored) {
            const formData = FormHelper.Create(undefined);
            AuthService.TokenSignIn(formData)
                .then(resp => {
                    setUser(resp.data as IUser);
                })
                .catch(() => {
                    handleLogout(true);
                });
        } else {
            setUser(undefined);
        }

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