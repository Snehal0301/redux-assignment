import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import detailReducer from './slice/detailSlice';

const localStorageMiddleware = ({ getState }) => {

  return (next) => (action) => {

    const result = next(action);

    localStorage.setItem("applicationState", JSON.stringify(getState()));

    return result;

  };

};

const reHydrateStore = () => {

  if (localStorage.getItem("applicationState") !== null) {

    return JSON.parse(localStorage.getItem("applicationState")); // re-hydrate the store

  }

};
const store = configureStore({
  reducer: {
    users: detailReducer
  },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

