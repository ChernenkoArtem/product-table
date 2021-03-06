import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import {rootReducer} from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import {compose ,createStore} from "redux";

const store = createStore(rootReducer,compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
