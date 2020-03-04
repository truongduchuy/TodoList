import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Login from './Login';
import { Provider } from 'react-redux';
import store from './store';
import Test from './Test';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/todo/:username" component={App} />
        <Route path="/test" component={Test} />
        <Route path="/login" component={Login} />
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
