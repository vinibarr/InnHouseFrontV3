
import { createContext, useCallback, useContext, useState } from "react";
import Loading from "../../components/Loading";
import { toast, ToastContainer, TypeOptions, Id as ToastId } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';


type ToastTypes = 'loading' | 'info' | 'success' | 'warning' | 'error';

interface INotificationContext {
    isLoading: boolean;
    showLoading: () => void;
    hideLoading: () => void;

    showToast: (type: ToastTypes, message: string, timeout?: number) => void;
    updateToast: (id: number, type: TypeOptions, message: string, timeout?: number) => void;
    dismissToast: (id?: ToastId) => void;
}


const NotificationContext = createContext<INotificationContext | undefined>(undefined);

const NotificationContextProvider = (props: React.PropsWithChildren) => {
    const [loading, setLoading] = useState<boolean>(false);


    const showLoading = useCallback(() => {
        setLoading(true);
    }, []);


    const hideLoading = useCallback(() => {
        setLoading(false);
    }, []);


    const showToast = useCallback((type: ToastTypes, message: string, timeout: number = 5000) => {
        return toast[type](message, {
            autoClose: timeout
        });
    }, []);


    const updateToast = useCallback((id: number, type: TypeOptions, message: string, timeout: number = 5000) => {
        toast.update(id, {
            render: message, 
            type, 
            autoClose: timeout,
            isLoading: false
        });
    }, []);


    const dismissToast = useCallback((id?: ToastId) => {
        toast.dismiss(id);
    }, []);



    const data: INotificationContext = {
        isLoading: loading,
        showLoading, 
        hideLoading,
        showToast,
        updateToast,
        dismissToast
    }

    return (
        <NotificationContext.Provider value={data}>
            {props.children}

            <ToastContainer
                position="bottom-right"
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={true}
                draggable={true}
                pauseOnHover={true}
                limit={5}
                theme='light'
            />

            <Loading open={loading} />
        </NotificationContext.Provider>
    );
}

const useNotificationContext = () => {
    const context = useContext(NotificationContext);
    
    if (context === undefined) {
        throw new Error('useNotificationContext must be used within a NotificationContextProvider');
    }
    
    return context;
}


export {
    useNotificationContext
}

export default NotificationContextProvider;