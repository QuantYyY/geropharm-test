import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Theme preset={presetGpnDefault}>
      <App />
    </Theme>
  </Provider>,
  document.getElementById('root')
);
