import Dashboard from "./components/adminView/Dashboard";
import DashboardMyProfile from "./components/adminView/Dashboard-my-profile";

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
]

export default dashboardRoutes;
