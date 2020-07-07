import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';

import HeaderNavbar from "../pages/common/header-navigation";
import Footer from "../pages/common/footer";

class Registation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            number: "",
            password: "",
            confirmPassword: "",
        };
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }
    
    mySubmitHandler = (event) => {
        event.preventDefault();
        let data= {
            name: this.state.name,
            email: this.state.email,
            number: this.state.number,
            password: this.state.password,
        },
        confirmPassword = this.state.confirmPassword;

        if (data.password !== confirmPassword) {
                // alert("Your age must be a number");
            toast("Default Notification !");

            toast.success("Success Notification !", {
                position: toast.POSITION.TOP_CENTER
            });
        }
        toast("Default Notification !");

            toast.success("Success Notification !", {
                position: toast.POSITION.TOP_CENTER
            });
    }

    render() {
        return (
            <>
            <HeaderNavbar/>
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
                                <form onSubmit={this.mySubmitHandler}>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-title">
                                                <h2>Register</h2>
                                                <p>Enter your details to be a member.</p>
                                            </div>
                                        </div>
                                        <div className="form-group col-12">
                                            <label>Name:</label>
                                            <input type="text" className="form-control" name="name"
                                            onChange={this.myChangeHandler}
                                            id="Name" placeholder="Enter full name"/>
                                        </div>
                                        <div className="form-group col-12">
                                            <label>Email:</label>
                                            <input type="email" className="form-control" name="email"
                                            onChange={this.myChangeHandler}
                                             id="email" placeholder="abc@xyz.com"/>
                                        </div>
                                        <div className="form-group col-12">
                                            <label>Phone Number:</label> 
                                            <input type="text" className="form-control" name="number"
                                            onChange={this.myChangeHandler}
                                             id="date1" placeholder="Select Date"/>
                                        </div>
                                        <div className="form-group col-6">
                                            <label>Select Password :</label>
                                            <input type="password" className="form-control" name="password"
                                            onChange={this.myChangeHandler}
                                            id="date" placeholder="Enter Password"/>
                                        </div>
                                        <div className="form-group col-6 col-left-padding">
                                            <label>Confirm Password :</label>
                                            <input type="password" className="form-control" name="confirmPassword"
                                            onChange={this.myChangeHandler}
                                             id="phnumber" placeholder="Re-enter Password"/>
                                        </div>
                                        {/* <div className="col-12 d-none">
                                            <div className="checkbox-outer">
                                                <input type="checkbox" name="vehicle2" value="Car"/> I agree to the <Link to="#">terms and conditions.</Link>
                                            </div>
                                        </div> */}
                                        <div className="col-12">
                                            <div className="comment-btn">
                                                {/* <Link to="#" className="btn-blue btn-red">Register Now</Link> */}
                                                <button className="btn-blue btn-red" type="submit">Register Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
            <ToastContainer autoClose={8000} />
            </>
        )
    }
}

export default Registation;