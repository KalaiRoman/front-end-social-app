import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import 'leaflet/dist/leaflet.css';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import { AppProviderContext } from "./contextapi/ContextProvider";
import { Provider } from "react-redux";
import store from "./Redux/store/Store";

import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)
// import 'primeicons/primeicons.css';                                 // icons
// import 'primeflex/primeflex.css';  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ToastContainer></ToastContainer>
    <Provider store={store}>
      <AppProviderContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppProviderContext>
    </Provider>

  </>
);


reportWebVitals();
