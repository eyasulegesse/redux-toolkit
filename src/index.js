import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from './feature/user';
import themeReducers from './feature/theme';
const store = configureStore({
  reducer: { user: userReducer, theme: themeReducers },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
