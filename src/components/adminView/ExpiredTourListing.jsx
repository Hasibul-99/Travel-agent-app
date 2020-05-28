import React, { Component } from "react";
import TourListing from "./TourListing";

class ExpiredTourListing extends Component {
    render() {
        return (
            <div class="dashboard-content">
                <TourListing context="expired"/>
            </div>
        )
    }
}

export default ExpiredTourListing;