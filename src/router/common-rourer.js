import Landing from "../components/pages/landing/index";
import Destination from "../components/pages/destination/index";

const commonRouter = [
    {
      path: "/",
      name: "Landing",
      component: Landing,
      layout: "/",
      exact: true
    },
    {
      path: '/destination',
      name: 'Destination',
      component: Destination,
      layout: "/"
    }
]

export default commonRouter;