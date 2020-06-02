import React from 'react';
import TopSlider from "./top-slider";
import Destination from "./destination";
import SearchOrdet from "./search-ordet";
import Deals from "./deals";
import TopDestinations from "./top-destinations";
 
export default function Landing() {
    return (
        <div>
            <TopSlider/>
            <SearchOrdet/>
            <Destination/>
            <Deals/>
            <TopDestinations/>
        </div>
    )
}
