import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from 'redux-state';
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import router from 'router';
import 'react-toastify/dist/ReactToastify.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
            <ToastContainer />
        </Provider>
    </React.StrictMode>
);
