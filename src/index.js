import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import './assets/scss/main.scss';
import * as serviceWorker from './serviceWorker';

import App from "./router/app"

ReactDOM.render(
    <BrowserRouter>
        <App />
        {/* <Switch>
            <Route path="/admin" render={props => <AdminLayout {...props} />} ></Route>
            <Redirect from="/" to="/admin/dashboard" />
        </Switch> */}
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
