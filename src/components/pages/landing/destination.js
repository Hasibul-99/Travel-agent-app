import React, { Component } from 'react';
import { DiMagento } from "react-icons/di";

import "../../../assets/css/slick.min.css";
// import "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css";
import Slider from "react-slick";

import package1 from  "../../../assets/images/package1.jpg";
import package2 from "../../../assets/images/package2.jpg";
import package3 from "../../../assets/images/package3.jpg";


export default class Destination extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            pauseOnHover: true
        };

        return (
            <div className="top-destinations">
                <div className="container">
                    <div className="section-title text-center">
                        <h2>Top Destinations</h2>
                        <div className="section-icon">
                            <i><DiMagento /></i>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit..</p>
                    </div>
                </div>
                <div className="row">
                    <Slider {...settings}>
                    <div className="col-sm-4">
                        <div className="package-item">
                            <div className="package-image">
                                <img src={package1} alt="Image 1" />
                                <div className="package-price">
                                    <div className="deal-rating">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star-o"></span>
                                        <span className="fa fa-star-o"></span>
                                    </div>
                                    <p><span>$659</span> / PER </p>
                                </div>
                            </div>
                            <div className="package-content">
                                <h3>Surfing at Goa, India</h3>
                                <p className="package-days"><i class="flaticon-time"></i> 5 days</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                <div className="package-info">
                                    <a href="/" className="btn-blue btn-red">View more details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                    <div class="package-item">
                        <div class="package-image">
                            <img src={package2} alt="Image 1"/>
                            <div class="package-price">
                                <div class="deal-rating">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star-o"></span>
                                    <span class="fa fa-star-o"></span>
                                </div>
                                <p><span>$659</span> / PER </p>
                            </div>
                        </div>
                        <div class="package-content">
                            <h3>Hot Air Ballooning</h3>
                            <p class="package-days"><i class="flaticon-time"></i> 5 days</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                            <div class="package-info">
                                <a href="tour-detail.html" class="btn-blue btn-red">View more details</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="package-item">
                        <div class="package-image">
                            <img src={package2} alt="Image 1"/>
                            <div class="package-price">
                                <div class="deal-rating">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star-o"></span>
                                    <span class="fa fa-star-o"></span>
                                </div>
                                <p><span>$659</span> / PER </p>
                            </div>
                        </div>
                        <div class="package-content">
                            <h3>Lake Tohoe Advanture</h3>
                            <p class="package-days"><i class="flaticon-time"></i> 5 days</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                            <div class="package-info">
                                <a href="tour-detail.html" class="btn-blue btn-red">View more details</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="package-item">
                        <div className="package-image">
                            <img src={package2} alt="Image 1"/>
                            <div className="package-price">
                                <div className="deal-rating">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star-o"></span>
                                    <span className="fa fa-star-o"></span>
                                </div>
                                <p><span>$659</span> / PER </p>
                            </div>
                        </div>
                        <div className="package-content">
                            <h3>Surfing at Goa, India</h3>
                            <p className="package-days"><i className="flaticon-time"></i> 5 days</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                            <div className="package-info">
                                <a href="tour-detail.html" className="btn-blue btn-red">View more details</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="package-item">
                        <div className="package-image">
                            <img src={package2} alt="Image 1"/>
                            <div className="package-price">
                                <div className="deal-rating">
                                    <span className="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star-o"></span>
                                    <span class="fa fa-star-o"></span>
                                </div>
                                <p><span>$659</span> / PER </p>
                            </div>
                        </div>
                        <div class="package-content">
                            <h3>Hot Air Ballooning</h3>
                            <p class="package-days"><i class="flaticon-time"></i> 5 days</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                            <div class="package-info">
                                <a href="tour-detail.html" class="btn-blue btn-red">View more details</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="package-item">
                        <div class="package-image">
                            <img src={package3} alt="Image 1"/>
                            <div class="package-price">
                                <div class="deal-rating">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star-o"></span>
                                    <span class="fa fa-star-o"></span>
                                </div>
                                <p><span>$659</span> / PER </p>
                            </div>
                        </div>
                        <div class="package-content">
                            <h3>Lake Tohoe Adventure</h3>
                            <p class="package-days"><i class="flaticon-time"></i> 5 days</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                            <div class="package-info">
                                <a href="tour-detail.html" class="btn-blue btn-red">View more details</a>
                            </div>
                        </div>
                    </div>
                </div>
                    </Slider>
                </div>
            </div>
        )
    }
}


// <div>
//                             <h3>1</h3>
//                         </div>
//                         <div>
//                             <h3>2</h3>
//                         </div>
//                         <div>
//                             <h3>3</h3>
//                         </div>
//                         <div>
//                             <h3>4</h3>
//                         </div>
//                         <div>
//                             <h3>5</h3>
//                         </div>
//                         <div>
//                             <h3>6</h3>
//                         </div>