import React, { Component } from 'react';
import { GiCutDiamond } from "react-icons/gi";
import {Link} from "react-router-dom";

export default class Testemonial extends Component {
    render() {
        return (
            <section class="testimonials">
                <div class="section-title text-center">
                    <h2>Best Rated Travel Agency</h2>
                    <div class="section-icon section-icon-white">
                        <i class="flaticon-diamond"></i>
                    </div>       
                </div>
                {/* <!-- Paradise Slider --> */}
                <div id="testimonial_094" class="carousel slide testimonial_094_indicators thumb_scroll_x swipe_x ps_easeOutSine" data-ride="carousel" data-pause="hover" data-interval="3000" data-duration="1000">

                    <ol class="carousel-indicators">
                        <li data-target="#testimonial_094" data-slide-to="0" class="active">
                            <img src="images/testemonial1.jpg" alt="testimonial_094_01"/>
                        </li>
                        <li data-target="#testimonial_094" data-slide-to="1">
                            <img src="images/testemonial2.jpg" alt="testimonial_094_02"/>
                        </li>
                        <li data-target="#testimonial_094" data-slide-to="2">
                            <img src="images/testemonial3.jpg" alt="testimonial_094_03"/>
                        </li>
                        <li data-target="#testimonial_094" data-slide-to="3">
                            <img src="images/testemonial4.jpg" alt="testimonial_094_04"/>
                        </li>
                        <li data-target="#testimonial_094" data-slide-to="4">
                            <img src="images/testemonial5.jpg" alt="testimonial_094_05"/>
                        </li>
                    </ol>

                    <div class="carousel-inner" role="listbox">
                        <div class="item active">
                            <div class="testimonial_094_slide">
                                <p>Lorem ipsum dolor sit amet consectetuer adipiscing elit am nibh unc varius facilisis eros ed erat in in velit quis arcu ornare laoreet urabitur adipiscing luctus massa nteger ut purus ac augue commodo commodo unc nec mi eu justo tempor consectetuer tiam.</p>
                                <div class="deal-rating">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star-o"></span>
                                    <span class="fa fa-star-o"></span>
                                </div>
                                <h5><a href="#">Susan Doe, Houston</a></h5>
                            </div> 
                        </div>

                        <div class="item">
                            <div class="testimonial_094_slide">
                                <p>Lorem ipsum dolor sit amet consectetuer adipiscing elit am nibh unc varius facilisis eros ed erat in in velit quis arcu ornare laoreet urabitur adipiscing luctus massa nteger ut purus ac augue commodo commodo unc nec mi eu justo tempor consectetuer tiam.</p>
                                <div class="deal-rating">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star-o"></span>
                                    <span class="fa fa-star-o"></span>
                                </div>
                                <h5><a href="#">Susan Doe, Houston</a></h5>
                            </div> 
                        </div>

                        <div class="item">
                            <div class="testimonial_094_slide">
                                <p>Lorem ipsum dolor sit amet consectetuer adipiscing elit am nibh unc varius facilisis eros ed erat in in velit quis arcu ornare laoreet urabitur adipiscing luctus massa nteger ut purus ac augue commodo commodo unc nec mi eu justo tempor consectetuer tiam.</p>
                                <div class="deal-rating">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star-o"></span>
                                    <span class="fa fa-star-o"></span>
                                </div>
                                <h5><a href="#">Susan Doe, Houston</a></h5>
                            </div>
                        </div>

                        <div class="item">
                            <div class="testimonial_094_slide">
                                <p>Lorem ipsum dolor sit amet consectetuer adipiscing elit am nibh unc varius facilisis eros ed erat in in velit quis arcu ornare laoreet urabitur adipiscing luctus massa nteger ut purus ac augue commodo commodo unc nec mi eu justo tempor consectetuer tiam.</p>
                                <div class="deal-rating">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star-o"></span>
                                    <span class="fa fa-star-o"></span>
                                </div>
                                <h5><a href="#">Susan Doe, Houston</a></h5>
                            </div>
                        </div>

                        <div class="item">
                            <div class="testimonial_094_slide">
                                <p>Lorem ipsum dolor sit amet consectetuer adipiscing elit am nibh unc varius facilisis eros ed erat in in velit quis arcu ornare laoreet urabitur adipiscing luctus massa nteger ut purus ac augue commodo commodo unc nec mi eu justo tempor consectetuer tiam.</p>
                                <div class="deal-rating">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star-o"></span>
                                    <span class="fa fa-star-o"></span>
                                </div>
                                <h5><a href="#">Susan Doe, Houston</a></h5>
                            </div> 
                        </div>
                    </div> 
                </div>
            </section>
        )
    }
}