import React, { Component } from "react";
import { Link } from "react-router-dom";

class Registation extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <section className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="login-form">
                                <form>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-title">
                                                <h2>Login</h2>
                                                <p>Register if you don't have an account.</p>
                                            </div>
                                        </div>
                                        <div className="form-group col-12">
                                            <div className="form-group">
                                                <label>Email address</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                            </div>
                                        </div>
                                        <div className="form-group col-12">
                                            <div className="form-group">
                                                <label>Password</label>
                                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="checkbox-outer">
                                                <input type="checkbox" name="vehicle2" value="Car"/> Remember Me?
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="comment-btn">
                                                <Link to="#" className="btn-blue btn-red">Login</Link>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="login-form">
                                <form>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-title">
                                                <h2>Register</h2>
                                                <p>Enter your details to be a member.</p>
                                            </div>
                                        </div>
                                        <div className="form-group col-12">
                                            <label>Name:</label>
                                            <input type="text" className="form-control" id="Name" placeholder="Enter full name"/>
                                        </div>
                                        <div className="form-group col-12">
                                            <label>Email:</label>
                                            <input type="email" className="form-control" id="email" placeholder="abc@xyz.com"/>
                                        </div>
                                        <div className="form-group col-12">
                                            <label>Phone Number:</label>
                                            <input type="text" className="form-control" id="date1" placeholder="Select Date"/>
                                        </div>
                                        <div className="form-group col-6">
                                            <label>Select Password :</label>
                                            <input type="password" className="form-control" id="date" placeholder="Enter Password"/>
                                        </div>
                                        <div className="form-group col-6 col-left-padding">
                                            <label>Confirm Password :</label>
                                            <input type="password" className="form-control" id="phnumber" placeholder="Re-enter Password"/>
                                        </div>
                                        <div className="col-12">
                                            <div className="checkbox-outer">
                                                <input type="checkbox" name="vehicle2" value="Car"/> I agree to the <Link to="#">terms and conditions.</Link>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="comment-btn">
                                                <Link to="#" className="btn-blue btn-red">Register Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Registation;