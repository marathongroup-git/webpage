import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { createBrowserHistory } from 'history'
import { Router } from 'react-router'
import thunk from 'redux-thunk'
import TagManager from 'react-gtm-module'
import reducer from './reducers'
import App from './routes'

// * Nievesita
/* const Snowflakes = require('magic-snowflakes')
Snowflakes({
  color: '#FFF',
  minSize: 15,
  maxSize: 25,
}) */

const tagManagerArgs = {
  gtmId: 'GTM-P25C856',
}

TagManager.initialize(tagManagerArgs)


const middleware = [thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware))
)
const history = createBrowserHistory()

if (localStorage.getItem('id') && localStorage.getItem('token')) {
  store.getState().reducersApp.loggedIn = true
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App loggedIn={store.getState().reducersApp.loggedIn} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
