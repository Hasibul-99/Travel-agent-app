import React from 'react';
import TopSlider from "./top-slider";
import Destination from "./destination";
import SearchOrdet from "./search-ordet";
 
export default function Landing() {
    return (
        <div>
            <TopSlider/>
            <SearchOrdet/>
            <Destination/>
        </div>
    )
}
