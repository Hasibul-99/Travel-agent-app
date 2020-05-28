import Dashboard from "./components/adminView/Dashboard";
import DashboardMyProfile from "./components/adminView/Dashboard-my-profile";
import DashboardAddTour from "./components/adminView/Dashboard-addtour";

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
]

export default dashboardRoutes;
