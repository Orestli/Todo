import React from 'react';
import App from './App';
import { Provider } from "react-redux";
import { store } from './redux/store';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './index.scss';

// @ts-ignore
const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
