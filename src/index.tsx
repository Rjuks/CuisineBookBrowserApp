import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './store/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { getCookie } from './service/cookieService';
import { useAppDispatch } from './store/hooks';
import { updateUserNotification } from './store/features/user/userSlice';

axios.interceptors.response.use(
  undefined,
  (error: AxiosError): Promise<void> => {
    const dispatch = useAppDispatch();

    if (error.response) {
      const statusCode = error.response.status;
      if (statusCode === 401) {
        window.location.replace('/login');
        dispatch(
          updateUserNotification({
            show: true,
            message: 'Zostałeś przeniesiony na stronę logowania',
            title: 'Twoja sesja wygasła',
            type: 'danger'
          })
        );
      }
    }
    return Promise.reject(error.response);
  }
);

axios.interceptors.request.use(
  (config: AxiosRequestConfig): Promise<any> => {
    console.log(config, 'cos jest?');
    console.log(getCookie('user'));
    const token = getCookie('user');
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.authorization = `Bearer ${token}`;
    }
    return Promise.resolve(config);
  },
  (error) => Promise.reject(error)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
