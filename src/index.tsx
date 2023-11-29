
import './styles/_globals.scss';
import ReactDOM from 'react-dom';
import App from './App';
import MainContextProvider from './contexts/MainContextProvider';
import AxiosInterceptor from './helpers/AxiosHelper';


ReactDOM.render(
  <MainContextProvider>
    <AxiosInterceptor>
      <App />
    </AxiosInterceptor>
  </MainContextProvider>,
  document.getElementById('root')
);

