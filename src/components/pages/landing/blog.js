import React, { Component } from 'react';
import {Link} from "react-router-dom";

import blog1 from  "../../../assets/images/blog1.jpg";
import blog2 from  "../../../assets/images/blog2.jpg";
import blog3 from  "../../../assets/images/blog3.jpg";


export default class Blog extends Component {
    render() {
        return (
            <section class="blog">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-title text-center">
                                <h2>Our Blog</h2>
                                <div class="section-icon">
                                    <i class="flaticon-diamond"></i>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit..</p>
                            </div>
                        </div>
                        <div class="col-sm-4 col-xs-12">
                            <div class="blog-item">
                                <div class="blog-image">
                                    <img src={blog1} alt=""/>
                                </div>
                                <div class="blog-content">
                                    <div class="blog-date"><p><i class="fa fa-clock-o"></i> Posted On : 12 May</p></div>
                                    <h3><a href="blog-detail.html">What happened during my first trip alone</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit.</p>
                                    <div class="blog-author">
                                        <div class="pull-left">
                                            <p><Link to=""><i class="fa fa-user-o" aria-hidden="true"></i> Jack Richard</Link></p>
                                        </div>
                                        <div class="pull-right blog-date-icon">
                                            <p><i class="fa fa-eye" aria-hidden="true"></i> 24</p>
                                            <p><i class="fa fa-heart" aria-hidden="true"></i> 5</p>
                                            <p><i class="fa fa-comment-o" aria-hidden="true"></i> 0</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 col-xs-12">
                            <div class="blog-item">
                                <div class="blog-image">
                                    <img src={blog2} alt=""/>
                                </div>
                                <div class="blog-content">
                                    <div class="blog-date"><p><i class="fa fa-clock-o"></i> Posted On : 12 May</p></div>
                                    <h3><a href="blog-detail.html">remembering the road i went through</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit.</p>
                                    <div class="blog-author">
                                        <div class="pull-left">
                                            <p><Link to=""><i class="fa fa-user-o" aria-hidden="true"></i> Jack Richard</Link></p>
                                        </div>
                                        <div class="pull-right blog-date-icon">
                                            <p><i class="fa fa-eye" aria-hidden="true"></i> 24</p>
                                            <p><i class="fa fa-heart" aria-hidden="true"></i> 5</p>
                                            <p><i class="fa fa-comment-o" aria-hidden="true"></i> 0</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 col-xs-12">
                            <div class="blog-item">
                                <div class="blog-image">
                                    <img src={blog3} alt=""/>
                                </div>
                                <div class="blog-content">
                                    <div class="blog-date"><p><i class="fa fa-clock-o"></i> Posted On : 12 May</p></div>
                                    <h3><a href="blog-detail.html">planning fot the perfect familytrip outdoor</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit.</p>
                                    <div class="blog-author">
                                        <div class="pull-left">
                                            <p><Link to=""><i class="fa fa-user-o" aria-hidden="true"></i> Jack Richard</Link></p>
                                        </div>
                                        <div class="pull-right blog-date-icon">
                                            <p><i class="fa fa-eye" aria-hidden="true"></i> 24</p>
                                            <p><i class="fa fa-heart" aria-hidden="true"></i> 5</p>
                                            <p><i class="fa fa-comment-o" aria-hidden="true"></i> 0</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}