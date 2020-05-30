import Registration from '../components/user/Registration';

const PublicRoutes = [
    {
        path: '/login',
        name: "Dashboard",
        component: Registration,
        layout: "/auth"
    }
];

export default PublicRoutes;