import { FooterOnly, HeaderOnly } from '../components/Layouts';
import { Home, Login, Register, Test } from '../pages';
const publicRoutes = [
    { path: '/', component: Home, layout: HeaderOnly },
    { path: '/login', component: Login, layout: FooterOnly },
    { path: '/register', component: Register, layout: FooterOnly },
    { path: '/test', component: Test, layout: FooterOnly },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
