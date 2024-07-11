import { FooterOnly } from '../components/Layouts';
import { Home, Login, Register } from '../pages';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login, layout: FooterOnly },
    { path: '/register', component: Register, layout: FooterOnly },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
