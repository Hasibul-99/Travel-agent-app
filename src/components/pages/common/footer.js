import React, { Component } from 'react';
import {Link} from "react-router-dom";

import YatraWhite from  "../../../assets/images/Yatra-white.png";
import bucket1 from  "../../../assets/images/bucket1.jpg";
import bucket2 from  "../../../assets/images/bucket2.jpg";
import bucket3 from  "../../../assets/images/bucket3.jpg";
import insta1 from  "../../../assets/images/insta1.jpg";
import insta2 from  "../../../assets/images/insta2.jpg";
import insta3 from  "../../../assets/images/insta3.jpg";
import insta4 from  "../../../assets/images/insta4.jpg";
import insta5 from  "../../../assets/images/insta5.jpg";
import insta6 from  "../../../assets/images/insta6.jpg";
import insta7 from  "../../../assets/images/insta7.jpg";
import insta8 from  "../../../assets/images/insta8.jpg";
import insta9 from  "../../../assets/images/insta9.jpg";

import { GrLocation } from 'react-icons/gr';
import { FiPhone } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';


export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div class="footer-upper">
                    <div class="container">
                        <div class="footer-links">
                            <div class="row">
                                <div class="col-md-3 col-xs-6">
                                    <div class="footer-about footer-margin">
                                        <div class="about-logo">
                                            <img src={YatraWhite} alt=""/>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                        <div class="about-location">
                                            <ul>
                                                <li>
                                                    <GrLocation/> Location
                                                </li>
                                                <li>
                                                    <FiPhone/> (012)-345-6789
                                                </li>                                        
                                                <li>
                                                    <AiOutlineMail/> tourntravel@testmail.com
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="footer-social-links">
                                            <ul>
                                                <li class="social-icon"><Link to=""><i class="fa fa-facebook" aria-hidden="true"></i></Link></li>
                                                <li class="social-icon"><Link to=""><i class="fa fa-instagram" aria-hidden="true"></i></Link></li>
                                                <li class="social-icon"><Link to=""><i class="fa fa-twitter" aria-hidden="true"></i></Link></li>
                                                <li class="social-icon"><Link to=""><i class="fa fa-youtube" aria-hidden="true"></i></Link></li>
                                                <li class="social-icon"><Link to=""><i class="fa fa-google" aria-hidden="true"></i></Link></li>
                                            </ul>
                                        </div>    
                                    </div>
                                </div>
                                <div class="col-md-3 col-xs-6">
                                    <div class="footer-links-list footer-margin">
                                        <h3>Browse Tour</h3>
                                        <ul>
                                            <li><Link to="">Cyclades <i class="fa fa-angle-right" aria-hidden="true"></i></Link></li>
                                            <li><Link to="">North Ionian <i class="fa fa-angle-right" aria-hidden="true"></i></Link></li>
                                            <li><Link to="">Sporades <i class="fa fa-angle-right" aria-hidden="true"></i></Link></li>
                                            <li><Link to="">View all Destinations <i class="fa fa-angle-right" aria-hidden="true"></i></Link></li>
                                            <li><Link to="">View all Yatchs <i class="fa fa-angle-right" aria-hidden="true"></i></Link></li>
                                            <li><Link to="">View all Cruises <i class="fa fa-angle-right" aria-hidden="true"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-3 col-xs-6">
                                    <div class="footer-recent-post footer-margin">
                                        <h3>Recent Posts</h3>
                                        <ul>
                                            <li>
                                                <div class="recent-post-item">
                                                    <div class="recent-post-image">
                                                        <img src={bucket1} alt=""/>
                                                    </div>
                                                    <div class="recent-post-content">
                                                        <h4><a href="tour-detail.html">A trip to heaven</a></h4>
                                                        <p>June 17, 2018</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="recent-post-item">
                                                    <div class="recent-post-image">
                                                        <img src={bucket2} alt=""/>
                                                    </div>
                                                    <div class="recent-post-content">
                                                        <h4><a href="tour-detail.html">Diving in Atlantic</a></h4>
                                                        <p>June 17, 2018</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="recent-post-item">
                                                    <div class="recent-post-image">
                                                        <img src={bucket3} alt=""/>
                                                    </div>
                                                    <div class="recent-post-content">
                                                        <h4><a href="tour-detail.html">Travellers History</a></h4>
                                                        <p>June 17, 2018</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-3 col-xs-6">
                                    <div class="footer-links-list">
                                        <div class="footer-instagram">
                                            <h3>Instagram</h3>
                                            <ul>
                                                <li><img src={insta1} alt=""/></li>
                                                <li><img src={insta2} alt=""/></li>
                                                <li><img src={insta3} alt=""/></li>
                                                <li><img src={insta4} alt=""/></li>
                                                <li><img src={insta5} alt=""/></li>
                                                <li><img src={insta6} alt=""/></li>
                                                <li><img src={insta7} alt=""/></li>
                                                <li><img src={insta8} alt=""/></li>
                                                <li><img src={insta9} alt=""/></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}