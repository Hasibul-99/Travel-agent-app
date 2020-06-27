import Landing from "../components/pages/landing/index";
import Destination from "../components/pages/destination/index";
import TourDetail from "../components/pages/destination/tour-detail";

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
    },
    {
      path: '/TourDetail/:id',
      name: 'TourDetail',
      component: TourDetail,
      layout: "/"
    }
]

export default commonRouter;