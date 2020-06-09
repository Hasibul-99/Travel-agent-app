import React from 'react';
import TopSlider from "./top-slider";
import Destination from "./destination";
import SearchOrdet from "./search-ordet";
import Deals from "./deals";
import TopDestinations from "./top-destinations";
import DealsOnSale from './deals-on-sale';
import Testemonial from './Testimonials';
import TourCountdown from './countdown-section';
 
export default function Landing() {
    return (
        <div>
            <TopSlider/>
            <SearchOrdet/>
            <Destination/>
            <Deals/>
            <TopDestinations/>
            <DealsOnSale/>
            <Testemonial/>
            <TourCountdown/>
        </div>
    )
}
