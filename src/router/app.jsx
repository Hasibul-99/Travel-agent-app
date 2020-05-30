import React, { Component } from 'react';

import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import AdminLayout from "../layouts/Admin";
import AuthLayout from "../layouts/Auth";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true,
            isAdmin: false,
        }
    }

    render() {
        return (
            <Switch>
                <Route path="/admin" render={props => <AdminLayout {...props} />} ></Route>
                <Route path="/auth" render={props => <AuthLayout {...props} />}></Route>
                <Redirect from="/" to="/admin/dashboard" />
            </Switch>
        )
    }
}

export default App;