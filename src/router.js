import Dashboard from "./components/adminView/Dashboard";

const dashboardRoutes = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: "pe-7s-graph",
      component: Dashboard,
      layout: "/admin"
    },
]

export default dashboardRoutes;
