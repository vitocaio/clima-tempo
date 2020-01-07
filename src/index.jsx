import React from 'react'
import ReactDOM from 'react-dom'
// import { applyMiddleware, createStore } from 'redux'
// import { Provider } from 'react-redux'

// import promise from 'redux-promise'
// import multi from 'redux-multi'
// import thunk from 'redux-thunk'
import { ThemeProvider } from 'styled-components';
import './style/global';
import theme from './style';

import App from './main/app'
// import reducers from './main/reducers'

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
//     && window.__REDUX_DEVTOOLS_EXTENSION__()
// const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools)
ReactDOM.render(
    // <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    // </Provider>
, document.getElementById('app'))