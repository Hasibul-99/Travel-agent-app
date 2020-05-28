import React, { Component } from "react";
import TourListing from "./TourListing";

class ActiveTourListing extends Component {
    render() {
        return (
        <div class="dashboard-content">
            <TourListing context="active"/>
        </div>)
    }
}

export default ActiveTourListing;