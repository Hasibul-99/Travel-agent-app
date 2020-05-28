import React, { Component } from "react";
import TourListing from "./TourListing";


class PendingTourListing extends Component {
    render() {
        return (
            <div class="dashboard-content">
                <TourListing context="pending"/>
            </div>
        )
    }
}

export default PendingTourListing;