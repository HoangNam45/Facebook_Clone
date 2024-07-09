import { FooterOnly } from '../components/Layouts';
import { Home, Login } from '../pages';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login, layout: FooterOnly },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
