import React, { Component } from 'react';
import { GiCutDiamond } from "react-icons/gi";
import { RiTimeLine } from "react-icons/ri";
import {Link} from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import sele1 from  "../../../assets/images/sale1.jpg";
import sele2 from  "../../../assets/images/sale2.jpg";
import sele3 from  "../../../assets/images/sale3.jpg";
import sele4 from  "../../../assets/images/sale4.jpg";

export default class DealsOnSale extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true
        };

        return (
            <section class="deals-on-sale">
                <div className="container">
                    <div class="section-title text-center">
                        <h2>Deals On Sale</h2>
                        <div class="section-icon">
                            <GiCutDiamond />
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit..</p>
                    </div>
                    <Slider {...settings} className="row sale-slider slider-button">
                        <div className="col-md-12 display-initial">
                            <div class="sale-item">
                                <div class="sale-image">
                                    <img src={sele1} alt=""/>
                                </div>
                                <div class="sale-content">
                                    <div class="sale-review">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                    </div>
                                    <h3><Link to="#">Surfing at Bahamas</Link></h3>
                                    <p><RiTimeLine/> 5 days</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                    <a href="tour-detail.html" class="btn-blue btn-red">View More</a>
                                </div>
                                <div class="sale-tag">
                                    <span class="old-price">$1449</span>
                                    <span class="new-price"> $900</span>
                                </div>
                                <div class="sale-overlay"></div>
                            </div>
                        </div>
                        <div class="col-md-12 display-initial">
                            <div class="sale-item">
                                <div class="sale-image">
                                    <img src={sele2} alt=""/>
                                </div>
                                <div class="sale-content">
                                    <div class="sale-review">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                    </div>
                                    <h3><Link to="#">Surfing at Bahamas</Link></h3>
                                    <p><RiTimeLine/> 5 days</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                    <a href="tour-detail.html" class="btn-blue btn-red">View More</a>
                                </div>
                                <div class="sale-tag">
                                    <span class="old-price">$1449</span>
                                    <span class="new-price"> $900</span>
                                </div>
                                <div class="sale-overlay"></div>
                            </div>
                        </div>
                        <div class="col-md-12 display-initial">
                            <div class="sale-item">
                                <div class="sale-image">
                                    <img src={sele3} alt=""/>
                                </div>
                                <div class="sale-content">
                                    <div class="sale-review">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                    </div>
                                    <h3><Link to="#">Surfing at Bahamas</Link></h3>
                                    <p><RiTimeLine/> 5 days</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                    <a href="tour-detail.html" class="btn-blue btn-red">View More</a>
                                </div>
                                <div class="sale-tag">
                                    <span class="old-price">$1449</span>
                                    <span class="new-price"> $900</span>
                                </div>
                                <div class="sale-overlay"></div>
                            </div>
                        </div>
                        <div className="col-md-12 display-initial">
                            <div class="sale-item">
                                <div class="sale-image">
                                    <img src={sele4} alt=""/>
                                </div>
                                <div class="sale-content">
                                    <div class="sale-review">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                    </div>
                                    <h3><Link to="#">Surfing at Bahamas</Link></h3>
                                    <p><RiTimeLine/> 5 days</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                    <a href="tour-detail.html" class="btn-blue btn-red">View More</a>
                                </div>
                                <div class="sale-tag">
                                    <span class="old-price">$1449</span>
                                    <span class="new-price"> $900</span>
                                </div>
                                <div class="sale-overlay"></div>
                            </div>
                        </div>
                        <div className="col-md-12 display-initial">
                            <div class="sale-item">
                                <div class="sale-image">
                                    <img src={sele1} alt=""/>
                                </div>
                                <div class="sale-content">
                                    <div class="sale-review">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                    </div>
                                    <h3><Link to="#">Surfing at Bahamas</Link></h3>
                                    <p><RiTimeLine/> 5 days</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                    <a href="tour-detail.html" class="btn-blue btn-red">View More</a>
                                </div>
                                <div class="sale-tag">
                                    <span class="old-price">$1449</span>
                                    <span class="new-price"> $900</span>
                                </div>
                                <div class="sale-overlay"></div>
                            </div>
                        </div>
                        <div class="col-md-12 display-initial">
                            <div class="sale-item">
                                <div class="sale-image">
                                    <img src={sele3} alt=""/>
                                </div>
                                <div class="sale-content">
                                    <div class="sale-review">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                    </div>
                                    <h3><Link to="#">Surfing at Bahamas</Link></h3>
                                    <p><RiTimeLine/> 5 days</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                    <a href="tour-detail.html" class="btn-blue btn-red">View More</a>
                                </div>
                                <div class="sale-tag">
                                    <span class="old-price">$1449</span>
                                    <span class="new-price"> $900</span>
                                </div>
                                <div class="sale-overlay"></div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        )
    }
}