import React, { Component } from 'react';

export default class TourCountdown extends Component {
    
    componentDidMount() {
        this.countdownTime();
    };

    countdownTime = () => {
        let countDownDate = new Date("May 10, 2021 11:10:09").getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {

            // Get todays date and time
            var now = new Date().getTime();
    
            // Find the distance between now and the count down date
            var distance = countDownDate - now;
    
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
            // Display the result in the element with id="demo"
            document.getElementById("demo").innerHTML = days + "<span>DAYS</span> " + hours + "<span>HOURS</span> "
            + minutes + "<span>MINS</span> " + seconds + "<span>SECS</span> ";
    
            // If the count down is finished, write some text 
            if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "Today Is The Day";
            }
        }, 1000);
    }

    render() {
        return (
            <section className="countdown-section">
                <div className="container">
                    <div className="countdown-title">
                        <h2>Special Tour in May, Discover <span>Thailand</span> for 50 Customers with <span>Discount 30%</span></h2>
                        <p>It’s limited seating! Hurry up</p>
                    </div>
                    <div className="countdown countdown-container container">
                        <p id="demo"></p>
                    </div>
                </div>
                <div className="testimonial-overlay"></div>
            </section>
        )
    }
}
