import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components';
import './styles/global';
import theme from './styles';

import App from './main/app'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
, document.getElementById('app'))
