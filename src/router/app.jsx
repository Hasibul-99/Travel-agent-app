import React, { Component } from 'react';

import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import AdminLayout from "../layouts/Admin";
import AuthLayout from "../layouts/Auth";
import CommonRouter from "../layouts/Common";

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
                <Route exact path="/" render={props => <CommonRouter {...props} />}></Route>
                <Route path="/admin" render={props => <AdminLayout {...props} />} ></Route>
                <Route path="/auth" render={props => <AuthLayout {...props} />}></Route>
                <Redirect from="/" to="/" /> 
            </Switch>
        )
    }
}

export default App;