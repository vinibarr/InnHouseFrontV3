
import { useMemo } from 'react';
import Axios from 'axios';
import DefaultConstants from '../data/Constants';
import { useNotificationContext } from '../contexts/NotificationContext';
import { authTokenStorage } from './StorageHelper';
import { useLanguageContext } from '../contexts/LanguageContext';


const AxiosHelper = Axios.create({
    baseURL: DefaultConstants.apiUrl
});


const AxiosInterceptor = (props: React.PropsWithChildren) => {
    const { translate } = useLanguageContext();
    const { showLoading, hideLoading, showToast } = useNotificationContext();

    useMemo(() => {
        AxiosHelper.interceptors.request.clear();
        AxiosHelper.interceptors.request.use((config) => {
            showLoading();
            return config;
        }, (err) => {
            return Promise.reject(err);
        });

        AxiosHelper.interceptors.response.clear();
        AxiosHelper.interceptors.response.use((resp) => {
            hideLoading();

            if (resp.data.token) {
                const authToken: string = resp.data.token;
                authTokenStorage.set(authToken);
            }

            if (resp.data.message) {
                showToast('success', resp.data.message);
            }

            return Promise.resolve(resp);
        }, (err) => {
            hideLoading();

            if (err.response.data.message) {
                showToast('warning', err.response.data.message);
            }
            
            return Promise.reject(err);
        });

        // eslint-disable-next-line
    }, [translate]);


    return <>
        {props.children}
    </>;
}

export {
    AxiosHelper
}

export default AxiosInterceptor;