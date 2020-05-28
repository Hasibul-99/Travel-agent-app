import Dashboard from "./components/adminView/Dashboard";
import DashboardMyProfile from "./components/adminView/Dashboard-my-profile";
import DashboardAddTour from "./components/adminView/Dashboard-addtour";
import ActiveTourListing from "./components/adminView/ActiveTourListing";
import PendingTourListing from "./components/adminView/PendingTourListing";
import ExpiredTourListing from "./components/adminView/ExpiredTourListing";

const dashboardRoutes = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: "pe-7s-graph",
      component: Dashboard,
      layout: "/admin"
    },
    {
        path: "/profile",
        name: "My-profile",
        icon: "pe-7s-graph",
        component: DashboardMyProfile,
        layout: "/admin"
    },
    {
        path: "/addTour",
        name: "add-tour",
        icon: "pe-7s-graph",
        component: DashboardAddTour,
        layout: "/admin"
    },
    {
        path: "/tourListing/active",
        name: "tour-listing-active",
        icon: "pe-7s-graph",
        component: ActiveTourListing,
        layout: "/admin"
    },
    {
        path: "/tourListing/pending",
        name: "tour-listing-pending",
        icon: "pe-7s-graph",
        component: PendingTourListing,
        layout: "/admin"
    },
    {
        path: "/tourListing/expired",
        name: "tour-listing-expired",
        icon: "pe-7s-graph",
        component: ExpiredTourListing,
        layout: "/admin"
    },
]

export default dashboardRoutes;
