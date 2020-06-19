import React from 'react';
import {Link} from 'react-router-dom';

import Yatra01 from  "../../../assets/images/Yatra-01.png";

function HeaderNavbar(props) {
    return (
        <>
        <header>
            <div class="upper-head clearfix">
                <div class="container">
                    <div class="contact-info">
                        <p><i class="flaticon-phone-call"></i> Phone: (012)-345-6789</p>
                        <p><i class="flaticon-mail"></i> Mail: tourntravel@testmail.com</p>
                    </div>
                    <div class="login-btn float-right">
                        <a href="login.html"><i class="fa fa-user-plus"></i> Register</a>
                        <a href="login.html"><i class="fa fa-unlock-alt"></i> Login</a>
                    </div>
                </div>
            </div>
        </header>
        <nav class="navbar navbar-expand-sm bg-light navbar-light sticky-top">
            <div className="container">
                <div className="logo float-left">
                    <Link href="index.html">
                        <img alt="" src={Yatra01}/>
                    </Link>
                </div>
                <div className="navbar-nav-wrapper float-right">
                    <ul class="nav navbar-nav">
                        <li class="nav-item active">
                            <Link  href="#">HOME</Link>
                        </li>
                        <li class="nav-item">
                            <Link  href="#">DESTINATION</Link>
                        </li>
                        <li class="nav-item">
                            <Link  href="#">BLOG</Link>
                        </li>
                        <li class="nav-item">
                            <Link  href="#">CONTACT US</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    );
}

export default HeaderNavbar;