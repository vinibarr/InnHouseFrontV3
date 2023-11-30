
import { createContext, useContext, useState, useCallback, useMemo } from "react";
import IUser from "../../interfaces/IUser";
import AuthService from "../../services/AuthService";


interface IUserContext {
    user: IUser | undefined;
	
    handleLogin: (formData: FormData) => void;
	handleLogout: () => void;
}


const UserContext = createContext<IUserContext | undefined>(undefined);

const UserContextProvider = (props: React.PropsWithChildren) => {
    const [user, setUser] = useState<IUser | undefined>(undefined);


    const handleLogin = useCallback((formData: FormData) => {
        AuthService.SignIn(formData)
            .then(resp => {
                setUser(resp.data as IUser);
            })
            .catch((err) => { });

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