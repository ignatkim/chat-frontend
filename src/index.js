import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from "react-router-dom";
import {MuiThemeProvider} from "@material-ui/core";
import {NotificationContainer} from "react-notifications";
import theme from "./theme";
import history from "./history";
import store from "./store/configureState";
import App from './App';

import 'react-notifications/lib/notifications.css';



const app = (
  <Provider store={store}>
    <Router history={history}>
      <MuiThemeProvider theme={theme}>
        <NotificationContainer/>
        <App/>
      </MuiThemeProvider>
    </Router>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
