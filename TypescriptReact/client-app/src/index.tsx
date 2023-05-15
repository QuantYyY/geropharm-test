import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';

ReactDOM.render(
  <Theme preset={presetGpnDefault}>
    <App />
  </Theme>,
  document.getElementById('root')
);
