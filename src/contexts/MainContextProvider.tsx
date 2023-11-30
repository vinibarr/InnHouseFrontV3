
import NotificationContextProvider from './NotificationContext';
import LanguageContextProvider from './LanguageContext';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ptBr from 'dayjs/locale/pt-br';
import UserContextProvider from './UserContext';


const MainContextProvider = (props: React.PropsWithChildren) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={ptBr}>
            <LanguageContextProvider>
                <NotificationContextProvider>
                    <UserContextProvider>
                        {props.children}
                    </UserContextProvider>
                </NotificationContextProvider>
            </LanguageContextProvider>
        </LocalizationProvider>
    );
}


export default MainContextProvider;