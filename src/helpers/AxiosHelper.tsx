
import { useMemo } from 'react';
import Axios from 'axios';
import DefaultConstants from '../data/Constants';
import { useNotificationContext } from '../contexts/NotificationContext';
import { useUserContext } from '../contexts/UserContext';
import { authTokenStorage } from './StorageHelper';
import { useLanguageContext } from '../contexts/LanguageContext';
import { HttpStatusEnum } from '../data/Enums';


const AxiosHelper = Axios.create({
    baseURL: DefaultConstants.apiUrl
});


const AxiosInterceptor = (props: React.PropsWithChildren) => {
    const { translate } = useLanguageContext();
    const { handleLogout } = useUserContext();
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

            if (resp.data.authToken) {
                const authToken: string = resp.data.authToken;
                authTokenStorage.set(authToken);
            }

            return Promise.resolve(resp);
        }, (err) => {
            hideLoading();

            switch (err.response.status) {
                case HttpStatusEnum.Unauthorized:
                    handleLogout();
                    showToast("warning", translate('_axiosHelperUnauthorizedStatusCodeError'));
                    break;
                
                case HttpStatusEnum.UnsupportedMediaType:
                    showToast("warning", translate('_axiosHelperUnsupportedMediaTypeStatusCodeError'));
                    break;
                
                case HttpStatusEnum.InternalServerError:
                    showToast("error", translate('_axiosHelperInternalServerErrorStatusCodeError'));
                    break;
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