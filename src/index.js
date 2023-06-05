import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from "redux/store.js";

import './index.css';
import App from './components/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter basename="/test-task-tweetcards">
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>         
           <App /> 
        </PersistGate>
    </Provider>    
    </BrowserRouter>
    
  // </React.StrictMode>
);


